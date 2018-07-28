import {_types} from './types';

export default {
    [_types.actions.AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },

    [_types.actions.AUTH_SUCCESS]: (state, token, user) => {
        state.status = 'success';
        state.token = token;
        state.user = user;
    },

    [_types.actions.AUTH_ERROR]: (state) => {
        state.status = 'error';
    },
};
