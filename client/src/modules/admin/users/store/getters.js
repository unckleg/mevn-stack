import {_types} from './types';
import { getField } from 'vuex-map-fields';

export default {
    [_types.getters.GET_USERS]: state => state.users,

    [_types.getters.GET_USER]: state => state.user,

    [_types.getters.GET_FORM_ACTION]: state => state.form_action,

    getField
};
