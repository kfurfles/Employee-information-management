import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard'
import Login from '@/views/login'
import User from '@/views/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '', redirect: to => {
        // the function receives the target route as the argument
        // return redirect path/location here.
        return { name: 'Login' }
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
