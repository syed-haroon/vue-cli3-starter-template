import Vue from 'vue';
import Router from 'vue-router';

import DashView from '@/layouts/Dash.vue';
import AuthView from '@/layouts/Auth.vue';
import NotFoundView from '@/layouts/404.vue';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: AuthView,
    },
    {
      path: '/',
      component: DashView,
      children: [
        {
          path: '/home',
          alias: '',
          name: 'Home',
          component: Home,
        },
        {
          path: '/about',
          name: 'About',
          component: About,
        },
      ],
    },
    {
      // not found handler
      path: '*',
      component: NotFoundView,
    },
  ],
});
