import { mutations } from './mutations'

import { 
    Get_Users,
    Create_User,
    Delete_User 
} from '@/services/api'

export default{
    async getUsers({ commit }){
        const list = await Get_Users()
        commit(mutations.SET_USER_LIST,list)
    },
    async createUser({ dispatch }, payload){
        try {
            const newUser = await Create_User(payload)
            return newUser
        } catch (error) {
            await dispatch('Message/setErrorMessage', 'Ops !! Something has wrong', { root: true })
        }
    },
    async deleteUser({ dispatch }, payload){
        try {
            const deletedUser = await Delete_User(payload)
            await dispatch('getUsers')
            return deletedUser
        } catch (error) {
            console.error(error)
            await dispatch('Message/setErrorMessage', 'Ops !! Something has wrong', { root: true })
        }
    }
}