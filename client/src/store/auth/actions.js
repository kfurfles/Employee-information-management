import { Authenticate } from '@/services/api'
import { mutations } from './mutations' 

export default{
    async Auth({ dispatch, getters }, payload){
        try {
            const response = await Authenticate(payload)
            await dispatch('setUserToken', response)
            return getters.getUser  
        } catch (error) {
            await dispatch('Message/setErrorMessage', error.response.data, { root: true })
            throw Error(error.response.data)
        }
    },
    async setUserToken({ commit }, payload){
        localStorage.setItem('token', JSON.stringify(payload))
        await commit(mutations.SET_USER_INFO, payload)
        return payload
    }
}