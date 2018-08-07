import { _types } from './types';
import Service from '@core/service';

let service = new Service('admin/users');
export default {
    [_types.actions.FETCH_USERS]: ({ commit }) => {
        return new Promise((resolve, reject) => {
            service.rest('')
                .then((data) => {
                    let users = data.users;
                    commit(_types.mutations.SET_USERS, {users});
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.FETCH_USER]: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            service.rest('get', { user_id: id })
                .then((data) => {
                    let user = data.user;
                    commit(_types.mutations.SET_USER, {user});
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.UPDATE_USER]: ({ dispatch, state }) => {
        return new Promise((resolve, reject) => {
            service.rest('update', state.user)
                .then((data) => {
                    dispatch(_types.actions.RESET_STATE);
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.UPLOAD_AVATAR]: ({ dispatch }, formData) => {
        return new Promise((resolve, reject) => {
            service.rest('uploadAvatar', formData)
                .then((data) => {
                    dispatch(_types.actions.RESET_STATE);
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.CREATE_USER]: ({ commit, state }) => {
        return new Promise((resolve, reject) => {
            service.rest('create', state.user)
                .then((data) => {
                    commit(_types.mutations.RESET_STATE);
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.DELETE_USER]: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            service.rest('delete', { user_id: id })
                .then((data) => {
                    commit(_types.mutations.RESET_STATE);
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.RESET_STATE]: ({ commit }) => {
        commit(_types.mutations.RESET_STATE);
    },

    [_types.actions.FORM_ACTION]: ({ commit }, formAction) => {
        commit(
            _types.mutations.SET_FORM_ACTION,
            formAction ? formAction : _types.actions.CREATE_USER
        );
    }
};
