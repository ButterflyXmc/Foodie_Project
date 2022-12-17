import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupPage from '../views/SignupPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: SignupPage
  },
]

const router = new VueRouter({
  routes
})

export default router
