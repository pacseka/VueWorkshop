import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from 'src/types/rootstate';
import { usermodule } from './usermodule/index';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {
        version: '1.0.0.'
    },
    modules: {
        usermodule
    }
};

export default new Vuex.Store<IRootState>(store);