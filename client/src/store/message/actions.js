import { mutations } from './mutations'
import Swal from 'sweetalert2'
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
        console.error(payload)
        throw Error(payload)
    },
    setSuccessMessage({ dispatch }, payload){
        dispatch('setVariation', 'success')
        dispatch('setMessage', payload)
    },
    AlertSuccess(){
        Swal.fire(
            'Nice!',
            'Operation completed successfully!',
            'success'
        )
    },
    resetState({ commit, dispatch }){
        dispatch('dismissed')
        commit(mutations.SET_RESET_STATE)
    }
}