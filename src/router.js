import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import NewHome from './components/NewHome.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new-home',
      name: 'New Home',
      component: NewHome,
    },
  ],
});
