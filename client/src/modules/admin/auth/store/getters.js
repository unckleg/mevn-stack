import {_types} from './types';

export default {
    [_types.getters.IS_AUTHENTICATED]: state => !!state.token,

    [_types.getters.AUTH_STATUS]: state => state.status,

    [_types.getters.GET_USER]: state => state.user
};
