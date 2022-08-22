import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Users from './pages/Users.vue';
import GetUsers from './pages/GetUsers.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },

  {
    path: '/getUser',
    name: 'getUser',
    component: GetUsers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
