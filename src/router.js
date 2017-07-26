import Vue from 'vue';
import Router from 'vue-router';
import AltHome from './components/AltHome.vue';
import Home from './components/Home.vue';
import Sobre from './components/Sobre.vue';
import Resultados from './components/Resultados.vue';
import Tabelas from './components/Tabelas.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/alt',
      name: 'Alt Home',
      component: AltHome,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'sobre',
          name: 'Sobre',
          component: Sobre,
        },
        {
          path: 'resultados',
          name: 'Resultados',
          component: Resultados,
        },
        {
          path: 'tabelas',
          name: 'Tabelas',
          component: Tabelas,
        },
      ],
    },
  ],
});
