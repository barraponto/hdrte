import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import NewHome from './components/NewHome.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/alt',
      name: 'Alt Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Home',
      component: NewHome,
    },
  ],
});
