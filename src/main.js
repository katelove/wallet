import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Plugin } from 'vue-fragment'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(Plugin)
Vue.use(require('vue-moment'))
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
