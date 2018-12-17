import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
// 全局在开发环境下，导入mock，对所有请求进行拦截
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
