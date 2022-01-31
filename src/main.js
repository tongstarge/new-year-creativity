import Vue from 'vue'
import App from './App.vue'
import tsgUI from './components/tsgUI'

Vue.config.productionTip = false
Vue.use(tsgUI);

new Vue({
    render: h => h(App)
}).$mount('#app')