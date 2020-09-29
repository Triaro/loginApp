import Vue from 'nativescript-vue';
import VueRouter from 'nativescript-vue-router-ns';

Vue.use(VueRouter);

import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/signUp',
      component: SignUp,
      meta: {
        title: 'SignUp',
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

export default router


