import * as types from './types';

export default {
    [types.AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },

    [types.AUTH_SUCCESS]: (state, token) => {
        state.status = 'success';
        state.token = token
    },

    [types.AUTH_ERROR]: (state) => {
        state.status = 'error';
    },
}
