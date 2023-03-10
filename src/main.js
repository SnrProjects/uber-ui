import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false

Vue.use(Vuetify)

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: "mdi"
    }
  }),
  router,
  store,
  render: h => h(App)
}).$mount('#app')