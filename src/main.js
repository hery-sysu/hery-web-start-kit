// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { LoadingPlugin, ToastPlugin, AlertPlugin, WechatPlugin, ConfirmPlugin } from 'vux'
import Actionsheet from './plugins/DDActionSheet'

Vue.config.productionTip = false
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(WechatPlugin)
Vue.use(ConfirmPlugin)
Vue.use(Actionsheet)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
