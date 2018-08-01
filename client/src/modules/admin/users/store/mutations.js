import {_types} from './types';
import {initialState} from './state';
import {updateField} from 'vuex-map-fields';

export default {
    [_types.mutations.SET_USERS]: (state, payload) => {
        state.users = payload.users;
    },

    [_types.mutations.RESET_STATE]: (state) => {
        Object.assign(state, initialState());
    },

    updateField
};
