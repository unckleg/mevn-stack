import {_types} from './types';

export default {
    [_types.actions.FETCH_USERS]: (state, payload) => {
        state.users = payload.users;
    }
};
