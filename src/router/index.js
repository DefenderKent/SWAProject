import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserRegistration from '../components/UserRegistration.vue'
// import MailConfirmationPending from'../components/MailConfirmationPending.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'sign_up',
        component: UserRegistration
      },
      {
        path: 'letter-sent',
        component: () => import('../components/MailConfirmationPending.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
