import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '../node_modules/layui-src/dist/css/layui.css'
// import layui from '../public/layui-src/build/lay/dest/layui.all.js'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// Vue.use(ElementUI);
// Vue.use(layui);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
