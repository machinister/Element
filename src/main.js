// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const router = new VueRouter({
  linkActiveClass: 'active',
  // mode: 'history', //需要删除不然收藏功能获取不到url
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

 // router.push('/goods');

/* eslint-disable no-new */

// new Vue({
//  el: '#app',
//  router,
//  template: '<App/>',
//  components: { App }
// });
