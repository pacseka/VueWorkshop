import axios from 'axios';
export const actions = {
    fetchUsers({ commit }) {
        axios({
            url: "/api/user"
        }).then((response) => {
            const payload = response && response.data;
            commit('usersLoaded', payload);
        }, (error) => {
            commit('loadError', "Error!!!");
        });
    }
};
//# sourceMappingURL=actions.js.map