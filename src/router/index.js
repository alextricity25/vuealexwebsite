import Vue from 'vue'
import Router from 'vue-router'
import 'semantic-ui-css/semantic.min.css'
import '@/css/centerstage.css'

import HomeComponent from '@/components/Home'
import AboutMeComponent from '@/components/AboutMe'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/about-me',
      component: AboutMeComponent,
    },
  ]
})

export default router
