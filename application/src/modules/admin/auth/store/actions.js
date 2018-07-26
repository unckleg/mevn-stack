import * as types from './types';
import axios from './../../../../service/axios';

export default {
    [types.AUTH_REQUEST]: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => {
            commit(types.AUTH_REQUEST);
            axios.post('admin/auth', user)
                .then(resp => {
                    let token = resp.data.token;
                    localStorage.setItem('auth-token', token);
                    commit(types.AUTH_SUCCESS, token);

                    axios.defaults.headers.common['Authorization'] = token;
                    dispatch(types.USER_REQUEST);
                    resolve(resp);
                })
                .catch(({response: {data}}) => {
                    commit(types.AUTH_ERROR);
                    localStorage.removeItem('auth-token');
                    reject(data)
                })
            ;
        });
    },

    [types.AUTH_LOGOUT]: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            commit(types.AUTH_LOGOUT);
            localStorage.removeItem('auth-token');
            delete axios.defaults.headers.common['Authorization'];
            resolve()
        })
    }
};
