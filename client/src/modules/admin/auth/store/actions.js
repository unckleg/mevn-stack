import {_types} from './types';
import axios from '@util/axios';
import Service from '@core/service';

let service = new Service('admin');
export default {
    [_types.actions.AUTH_REQUEST]: ({ commit }, user) => {
        return new Promise((resolve, reject) => {
            commit(_types.actions.AUTH_REQUEST);
            service.rest('auth', user)
                .then((data) => {
                    let token = 'Bearer ' + data.token;
                    let user = data.user;
                    localStorage.setItem('auth-token', token);
                    localStorage.setItem('auth-user', user);
                    commit(_types.actions.AUTH_SUCCESS, {token, user});

                    axios.defaults.headers.common['Authorization'] = token;
                    resolve(data);
                })
                .catch((err) => {
                    commit(_types.actions.AUTH_ERROR);
                    localStorage.removeItem('auth-token');
                    reject(err)
                })
            ;
        });
    },

    [_types.actions.AUTH_LOGOUT]: ({ commit }) => {
        return new Promise((resolve) => {
            commit(_types.actions.AUTH_LOGOUT);
            localStorage.removeItem('auth-token');
            localStorage.removeItem('auth-user');
            delete axios.defaults.headers.common['Authorization'];
            resolve()
        });
    }
};
