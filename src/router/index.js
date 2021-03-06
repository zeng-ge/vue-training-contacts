import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '../pages/ContactList'
import ContactDetail from '../pages/ContactDetail'
import Example from '../examples'

Vue.use(VueRouter)

export const routes = [{
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/contacts/:id',
    component: ContactDetail
  },
  {
    path: '/example',
    component: Example
  },
  {
    path: '*',
    redirect: '/contacts'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router