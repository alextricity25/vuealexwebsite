import Vue from 'vue'
import Router from 'vue-router'
import 'semantic-ui-css/semantic.min.css'
import '@/css/centerstage.css'

import HomeComponent from '@/components/Home'
import ProfileComponent from '@/components/Profile'
import MessagesComponent from '@/components/Messages'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/profile',
      component: ProfileComponent,
    },
    {
      path: '/messages',
      component: MessagesComponent,
    }
  ]
})

export default router
