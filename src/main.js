import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Plugin } from 'vue-fragment';
import store from './store/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2';
import Big from 'big.js';
import dayjs from 'dayjs';
import Toasted from 'vue-toasted';

Vue.use(VueClipboard);
Vue.use(Plugin);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Toasted, {
    position: 'bottom-center',
    fullWidth: false,
    duration: 3000,
    type: 'success'
});

Vue.filter('dimension', (str) => {
    if (!str) {
        return '';
    }
    const v = new Big(str);
    return parseFloat(v.toFixed(8));
});

Vue.filter('formateToDateTimeSecond', (date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
});

Vue.filter('formateToDateTime', (date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm');
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
