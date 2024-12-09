// router.js
import { createRouter, createWebHistory } from 'vue-router';
import bodymain from '../components/bodymain.vue';
import login from '../components/login.vue';
import register from '../components/register.vue';
import detail from '../components/detail.vue';

import profile from '../components/profile.vue';


const routes = [
    { path: '/', component: bodymain },
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/detail/:id', component: detail, meta: { requiresAuth: true }  },
    {path:'/profile', component: profile, meta: { requiresAuth: true }  }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  // Kiểm tra quyền truy cập trước khi chuyển trang
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.matched.some (record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
  
  export default router