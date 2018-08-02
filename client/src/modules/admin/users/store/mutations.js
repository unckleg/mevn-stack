import {_types} from './types';
import {initialState} from './state';
import {updateField} from 'vuex-map-fields';

export default {
    [_types.mutations.SET_USERS]: (state, payload) => {
        state.users = payload.users;
    },

    [_types.mutations.SET_USER]: (state, payload) => {
        let user = payload.user;
        user.password = '';
        state.user = payload.user;
    },

    [_types.mutations.SET_FORM_ACTION]: (state, formAction) => {
        state.form_action = formAction
    },

    [_types.mutations.RESET_STATE]: (state) => {
        Object.assign(state, initialState());
    },

    updateField
};
