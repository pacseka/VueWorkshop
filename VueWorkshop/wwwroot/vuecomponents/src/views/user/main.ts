import Vue from 'vue'
import User from './User.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(User)
}).$mount('#app')