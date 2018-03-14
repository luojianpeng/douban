import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test from '../components/test'

import Audio from '../pages/Audio/audio.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Home from '../pages/Home/home.vue'
import Group from '../pages/Group/group.vue'
import Mine from '../pages/Mine/mine.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast

    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
