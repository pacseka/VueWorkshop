export const mutations = {
    usersLoaded(state, payload) {
        state.error = false;
        state.users = payload;
    },
    loadError(state, payload) {
        state.error = true;
        state.users = undefined;
        state.message = payload;
    }
};
//# sourceMappingURL=mutations.js.map