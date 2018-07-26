import store from './../store';

export default {
    isAuthenticated () {
        return store.getters['Auth/isAuthenticated'];
    }
};
