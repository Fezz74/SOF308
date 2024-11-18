// router.js
import { createRouter, createWebHistory } from 'vue-router';
import bodymain from '../components/bodymain.vue';
import login from '../components/login.vue';
import register from '../components/register.vue';
import detail from '../components/detail.vue';



const routes = [
    { path: '/', component: bodymain },
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/detail', component: detail }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router