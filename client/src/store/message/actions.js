import { mutations } from './mutations'
export default{
    setMessage({ dispatch }, payload){
        dispatch('show')
        commit(mutations.SET_MESSAGE, payload)
    },
    dismissed({ commit }){
        commit(mutations.SET_MESSAGE_STATE, false)
    },
    show({ commit }){
        commit(mutations.SET_MESSAGE_STATE, true)
    }
}