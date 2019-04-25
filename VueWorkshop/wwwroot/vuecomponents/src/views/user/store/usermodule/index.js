import { actions } from './actions';
import { mutations } from './mutations';
export const state = {
    users: undefined,
    error: false,
    message: ""
};
const namespaced = true;
export const usermodule = {
    namespaced,
    state,
    actions,
    mutations
};
//# sourceMappingURL=index.js.map