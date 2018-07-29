import removeNamespace from './../../../../store/helper';

let namespace = 'Users/';
export const types = {
    actions: {
        FETCH_USERS: namespace + 'FETCH_USERS',
    },

    getters: {
        USERS: namespace + 'USERS',
    }
};

export const _types = removeNamespace(namespace, types);
