export default {
    isAuthenticated: state => {
        return !!state.token
    },

    authStatus: state => {
        return state => state.status
    }
};
