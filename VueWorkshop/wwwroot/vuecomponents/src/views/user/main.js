import Vue from 'vue';
import User from './User.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
    router,
    store,
    render: h => h(User)
}).$mount('#app');
//# sourceMappingURL=main.js.map