import helpers from '@util/helpers';

let namespace = 'AdminUsers/';
export const types = {
    actions: {
        FETCH_USERS: namespace + 'FETCH_USERS',
        FETCH_USER: namespace + 'FETCH_USER',
        CREATE_USER: namespace + 'CREATE_USER',
        UPDATE_USER: namespace + 'UPDATE_USER',
        DELETE_USER: namespace + 'DELETE_USER',
        RESET_STATE: namespace + 'RESET_STATE',
        FORM_ACTION: namespace + 'FORM_ACTION'
    },

    getters: {
        GET_USERS: namespace + 'GET_USERS',
        GET_USER: namespace + 'GET_USER',
        GET_FORM_ACTION: namespace + 'GET_FORM_ACTION'
    },

    mutations: {
        SET_USERS: namespace + 'SET_USERS',
        SET_USER: namespace + 'SET_USER',
        RESET_STATE: namespace + 'RESET_STATE',
        SET_FORM_ACTION: namespace + 'SET_FORM_ACTION'
    }
};

export const _types = helpers.removeNamespace(namespace, types);
export const ns = namespace.replace('/', '');
