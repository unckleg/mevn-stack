import { _types } from './types';
import { getField } from 'vuex-map-fields';

export default {
    [_types.getters.GET_POSTS]: state => state.posts,

    getField
};
