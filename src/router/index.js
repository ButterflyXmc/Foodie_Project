import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientSignupPage from '@/components/ClientSignupPage.vue'
import ClientLoginPage from '@/components/ClientLoginPage.vue'
import DiscoverPage from '@/views/DiscoverPage.vue';
import RestSignupPage from '@/components/RestSignupPage.vue';
import RestLoginPage from '@/components/RestLoginPage.vue';
import RestMenuPage from '@/components/RestMenuPage.vue';



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
    component: DiscoverPage
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
  }
]

const router = new VueRouter({
  routes
})

export default router
