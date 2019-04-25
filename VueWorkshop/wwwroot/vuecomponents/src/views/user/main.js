import Vue from 'vue';
import User from './User.vue';
import router from './router';
Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(User)
}).$mount('#app');
//# sourceMappingURL=main.js.map