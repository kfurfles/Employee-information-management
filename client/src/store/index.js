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
        Users
    }
})