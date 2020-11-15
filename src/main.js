import Vue from 'vue'
import App from './App.vue'
// import I18nMixin from "./mixins/I18n";
import I18nPlugin from './plugins/I18n'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// Vue.mixin(I18nMixin);
Vue.use(I18nPlugin)

new Vue({
  // mixins: [I18nMixin]
  router,
  store,
  render: h => h(App)
}).$mount('#app')
