import {_types} from './types';

export default {
    [_types.getters.GET_ERRORS]: state => state.errors,

    [_types.getters.GET_MODULE]: state => state.module
};
