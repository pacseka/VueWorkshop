import Vue from 'vue';
import Vuex from 'vuex';
import { usermodule } from './usermodule/index';
Vue.use(Vuex);
const store = {
    state: {
        version: '1.0.0.'
    },
    modules: {
        usermodule
    }
};
export default new Vuex.Store(store);
//# sourceMappingURL=index.js.map