import { createStore } from 'vuex'

export default createStore({
    state: {
        user: undefined
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {

    },
    modules: {

    }
});