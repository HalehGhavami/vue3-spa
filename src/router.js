import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import TemplateUser from './pages/TemplateUser.vue';
import Users from './pages/Users.vue';
import GetUsers from './pages/GetUsers.vue';
import ShowUser from './pages/ShowUser.vue';
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
    name: 'userTemplate',
    component: TemplateUser,
    children: [
      // eslint-disable-next-line no-undef
      { path: '', name: 'getUser', component: GetUsers },
      { path: ':id', name: 'userId', component: ShowUser },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
