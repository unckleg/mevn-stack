import {_types} from './types';
import axios from './../../../../service/axios';

export default {
    [_types.actions.AUTH_REQUEST]: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit(_types.actions.AUTH_REQUEST);
            axios.post('admin/auth', user)
                .then(resp => {
                    let token = resp.data.token;
                    let user = resp.data.user;
                    localStorage.setItem('auth-token', token);
                    console.log(user);
                    commit(_types.actions.AUTH_SUCCESS, token, user);

                    axios.defaults.headers.common['Authorization'] = token;
                    resolve(resp);
                })
                .catch(({response: {data}}) => {
                    commit(_types.actions.AUTH_ERROR);
                    localStorage.removeItem('auth-token');
                    reject(data)
                })
            ;
        });
    },

    [_types.actions.AUTH_LOGOUT]: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit(_types.actions.AUTH_LOGOUT);
            localStorage.removeItem('auth-token');
            delete axios.defaults.headers.common['Authorization'];
            resolve()
        });
    }
};
