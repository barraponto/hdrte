import './styles.css';
import Vue from 'vue';
import router from './router';

import App from './components/App.vue';

/* eslint-disable no-new */
new Vue({
  router,
  el: '#root',
  render: (h) => h(App),
});
