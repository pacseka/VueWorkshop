import { MutationTree } from 'vuex';
import { IUser, IUserState } from 'src/types/user';

export const mutations: MutationTree<IUserState> = {
    usersLoaded(state, payload: IUser[]) {
        state.error = false;
        state.users = payload;
    },

    loadError(state, payload) {
        state.error = true;
        state.users = undefined;
        state.message = payload;
    },

    loadSelectUser(state, payload: IUser) {
        state.selectedUser = payload;
    }
};