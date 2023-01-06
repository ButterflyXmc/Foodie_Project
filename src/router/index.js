import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientSignupPage from '@/components/ClientSignupPage.vue'
import ClientLoginPage from '@/components/ClientLoginPage.vue'
import MainHomePage from '@/views/MainHomePage.vue';
import RestSignupPage from '@/components/RestSignupPage.vue';
import RestLoginPage from '@/components/RestLoginPage.vue';
import RestMenuPage from '@/components/RestMenuPage.vue';

import ClientPage from '@/views/ClientPage.vue'
import RestoPage from '@/views/RestoPage.vue'
import ClientHomePage from '@/views/ClientHomePage.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ClientSignupPage
  },
  {
    path: '/log-in',
    component: ClientLoginPage
  },
  {
    path: '/discover-page',
    component: MainHomePage
  },
  {
    path: '/rest-signup',
    component: RestSignupPage
  },
  {
    path: '/rest-login',
    component: RestLoginPage
  },
  {
    path: '/rest-menu',
    component: RestMenuPage
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
  }

]

const router = new VueRouter({
  routes
})

export default router
