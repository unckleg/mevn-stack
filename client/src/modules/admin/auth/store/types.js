import removeNamespace from './../../../../store/helper';

let namespace = 'Auth/';
export const types = {
    actions: {
        AUTH_REQUEST: namespace + 'AUTH_REQUEST',
        AUTH_LOGOUT: namespace + 'AUTH_LOGOUT',
        AUTH_SUCCESS: namespace + 'AUTH_SUCCESS',
        AUTH_ERROR: namespace + 'AUTH_ERROR',
    },

    getters: {
        IS_AUTHENTICATED: namespace + 'IS_AUTHENTICATED',
        AUTH_STATUS: namespace + 'AUTH_STATUS',
        GET_USER: namespace + 'GET_USER'
    }
};

export const _types = removeNamespace(namespace, types);
