import {_types} from './types';

export default {
    [_types.mutations.SET_ERRORS]: (state, payload) => {
        state.errors.push(payload.errors);
    },

    [_types.mutations.PURGE_ERRORS]: (state) => state.errors = [],

    [_types.mutations.SET_MODULE]: (state, payload) => {
        state.module = payload.module;
    }
};
