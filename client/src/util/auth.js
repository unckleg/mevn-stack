import store from './../store';
import {types} from './../modules/admin/auth/store/types';

export default {
    isAuthenticated () {
        return store.getters[types.getters.IS_AUTHENTICATED];
    }
};
