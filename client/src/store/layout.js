export default {
    namespaced: true,
    state: {
        module: 'site'
    },

    mutations: {
        SET_MODULE (state, payload) {
            state.module = payload
        }
    },

    getters: {
        module (state) {
            return state.module
        }
    }
}
