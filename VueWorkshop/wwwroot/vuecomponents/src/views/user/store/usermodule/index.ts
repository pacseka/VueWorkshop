import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { IUserState } from 'src/types/user';
import { IRootState } from 'src/types/rootstate';


export const state: IUserState = {
    users: undefined,
    selectedUser: undefined,
    error: false,
    message: ""
};

const namespaced: boolean = true;

export const usermodule: Module<IUserState, IRootState> = {
    namespaced,
    state,
    actions,
    mutations
};