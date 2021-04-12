import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

Vue.config.productionTip = false;

Vue.use(Element)

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')