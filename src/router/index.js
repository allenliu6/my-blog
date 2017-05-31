import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Publish from '../views/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
