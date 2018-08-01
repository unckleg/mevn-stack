import {_types} from './types';
import {UsersService} from './../service/UsersService';

export default {
    [_types.actions.FETCH_USERS]: ({commit}) => {
        return new Promise((resolve, reject) => {
            UsersService.fetchAll()
                .then(resp => {
                    let users = resp.data.users;
                    commit(_types.mutations.SET_USERS, {users});
                    resolve(resp);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.CREATE_USER]: ({ commit, state }) => {
        return new Promise((resolve, reject) => {
            UsersService.create(state.user)
                .then(resp => {
                    commit(_types.mutations.RESET_STATE);
                    resolve(resp);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.DELETE_USER]: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            UsersService.delete(id)
                .then(resp => {
                    commit(_types.mutations.RESET_STATE);
                    resolve(resp);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },

    [_types.actions.RESET_STATE]: ({commit}) => {
        commit(_types.mutations.RESET_STATE);
    }
};
