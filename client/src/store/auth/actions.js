import { Authenticate } from '@/services/api'
import { GET_TOKEN, SET_TOKEN } from '@/helpers/token'
import { mutations } from './mutations'
let renew; 

export default{
    async Auth({ dispatch, getters }, payload){
        try {
            const response = await Authenticate(payload)
            await dispatch('setUserToken', response)
            
            // NON ORTODIXAL MODE TO RENEW TOKEN, BECAUSE THE BACK-END IS NOT READY
            clearInterval(renew)
            dispatch('reValidateToken', payload)

            return getters.getUser  
        } catch (error) {
            await dispatch('Message/setErrorMessage', error.response.data, { root: true })
        }
    },
    async setUserToken({ commit }, payload){
        SET_TOKEN(payload)
        await commit(mutations.SET_USER_INFO, payload)
        return payload
    },
    reValidateToken({ dispatch }, payload){
        setInterval(async ()=>{
            const response = await Authenticate(payload)
            await dispatch('setUserToken', response)
            console.log('NEW TOKEN')
        }, 60000 * 20)
    }
}