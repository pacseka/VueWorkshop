import Vue from 'vue';
import Router from 'vue-router';
import UserList from './UserList.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/user/:id',
            name: 'userdetails',
            component: () => import(/* webpackChunkName: "userdetails" */ './UserDetails.vue')
        },
        {
            path: '/',
            name: 'userlists',
            component: UserList
        }
    ]
});
//# sourceMappingURL=router.js.map