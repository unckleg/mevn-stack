import {_types} from './types';

export default {
    [_types.actions.AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },

    [_types.actions.AUTH_SUCCESS]: (state, payload) => {
        state.status = 'success';
        state.token = payload.token;
        state.user = payload.user;
    },

    [_types.actions.AUTH_ERROR]: (state) => {
        state.status = 'error';
    },

    [_types.actions.AUTH_LOGOUT]: (state) => {
        state.status = false;
        state.user = {};
        state.token = '';
    }
};
