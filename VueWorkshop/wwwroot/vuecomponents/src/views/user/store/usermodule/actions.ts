import { ActionTree } from 'vuex';
import axios from 'axios';
import { IUser, IUserState } from 'src/types/user';
import { IRootState } from 'src/types/rootstate';

export const actions: ActionTree<IUserState, IRootState> = {
    fetchUsers({ commit }): any {
        axios({
            url: "/api/user"
        }).then((response) => {
            const payload: IUser[] = response && response.data;
            commit('usersLoaded', payload);
        }, (error) => {
            commit('loadError', "Error!!!");
        });
    }
};