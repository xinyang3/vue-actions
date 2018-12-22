// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router/index.js'
import customerDirective from './utils/customer-directive.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'fullpage.js/dist/fullpage.css'
// import VueFullpage from 'vue-fullpage.js';
// Vue.use(VueFullpage);
import messageBoxCustomer from './views/message-box-customer/src/main.js'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(messageBoxCustomer)

var router = new Router({
  routes: routes
})
console.log(router)
// Vue.use(router)
Vue.config.productionTip = false

customerDirective()
Vue.config.silent = true

new Vue({
  // el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
