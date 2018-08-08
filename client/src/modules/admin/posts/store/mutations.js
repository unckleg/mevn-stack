import { _types } from './types';
import { initialState } from './state';
import { updateField } from 'vuex-map-fields';

export default {
    [_types.mutations.SET_POSTS]: (state, payload) => {
        state.posts = payload.posts;
    },

    updateField
};
