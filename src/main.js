import Vue from 'vue'
import App from './App.vue'
import './assets/icon/iconfont.js'
import './assets/icon/iconfont.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
