import removeNamespace from '@/store/helper';

let namespace = 'Users/';
export const types = {
    actions: {
        FETCH_USERS: namespace + 'FETCH_USERS',
        FETCH_USER: namespace + 'FETCH_USER',
        CREATE_USER: namespace + 'CREATE_USER',
        UPDATE_USER: namespace + 'UPDATE_USER',
        DELETE_USER: namespace + 'DELETE_USER',
        RESET_STATE: namespace + 'RESET_STATE'
    },

    getters: {
        GET_USERS: namespace + 'GET_USERS',
        GET_USER: namespace + 'GET_USER'
    },

    mutations: {
        SET_USERS: namespace + 'SET_USERS',
        SET_USER: namespace + 'SET_USER',
        RESET_STATE: namespace + 'RESET_STATE'
    }
};

export const _types = removeNamespace(namespace, types);
export const ns = namespace.replace('/', '');
