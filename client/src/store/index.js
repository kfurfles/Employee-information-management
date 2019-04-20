import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)
import Auth from './auth'
import Message from './message'
import Users from './users'

export default new Vuex.Store({
    modules:{
        Auth,
        Message,
        Users,
    },
    actions:{
        resetState({ dispatch }){
            dispatch('Message/resetState', null, { root: true })
            dispatch('Auth/resetState', null, { root: true })
            dispatch('Users/resetState', null, { root: true })
        }
    }
})