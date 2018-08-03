import {_types} from './types';

export default {
    [_types.actions.REGISTER_MODULE]: ({ commit }, module) => {
        commit(_types.mutations.SET_MODULE, { module });
    },

    [_types.actions.CATCH_ERRORS]: ({ commit }, errors) => {
        commit(_types.mutations.SET_ERRORS, { errors });
    },

    [_types.actions.PURGE_ERRORS]: ({ commit }) => commit(_types.mutations.PURGE_ERRORS)
};
