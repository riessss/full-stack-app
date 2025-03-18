import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../components/ContactList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList
    },
  ]
})

export default router
