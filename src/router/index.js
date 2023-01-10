import Vue from 'vue'
import VueRouter from 'vue-router'

import MainHomePage from '@/views/MainHomePage.vue';

import ClientPage from '@/views/ClientPage.vue'
import RestoPage from '@/views/RestoPage.vue'
import ClientHomePage from '@/views/ClientHomePage.vue'
import RestHomePage from '@/views/RestHomePage'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainHomePage
  },
  {
    path: '/client-page',
    component: ClientPage
  },
  {
    path: '/resto-page',
    component: RestoPage
  },
  {
    path: '/client-homepage',
    component: ClientHomePage
  },
  {
    path: '/rest-home',
    component: RestHomePage
  }

]

const router = new VueRouter({
  routes
})

export default router
