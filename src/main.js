import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    foo: "foo",
  } 
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
