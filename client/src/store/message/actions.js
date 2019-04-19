import { mutations } from './mutations'
export default{
    setMessage({ dispatch, commit }, payload){
        dispatch('show')
        commit(mutations.SET_MESSAGE, payload)
    },
    setVariation({ commit }, payload){
        commit(mutations.SET_MESSAGE_VARIATION, payload)
    },
    dismissed({ commit }){
        commit(mutations.SET_MESSAGE_STATE, false)
    },
    show({ commit }){
        commit(mutations.SET_MESSAGE_STATE, true)
    },
    setErrorMessage({ dispatch }, payload){
        dispatch('setVariation', 'danger')
        dispatch('setMessage', payload)
    },
}