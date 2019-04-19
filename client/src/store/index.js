import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Auth from './auth'
import Message from './message'

export default new Vuex.Store({
    modules:{
        Auth,
        Message
    }
})