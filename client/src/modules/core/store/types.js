import helpers from '@/util/helpers';

let namespace = 'Core/';
export const types = {
    actions: {
        REGISTER_MODULE: namespace + 'REGISTER_MODULE',
        CATCH_ERRORS: namespace + 'CATCH_ERRORS',
        PURGE_ERRORS: namespace + 'PURGE_ERRORS'
    },

    getters: {
        GET_ERRORS: namespace + 'GET_ERRORS',
        GET_MODULE: namespace + 'GET_MODULE'
    },

    mutations: {
        SET_ERRORS: namespace + 'SET_ERRORS',
        SET_MODULE: namespace + 'SET_MODULE',
        PURGE_ERRORS: namespace + 'PURGE_ERRORS'
    }
};

export const _types = helpers.removeNamespace(namespace, types);
export const ns = namespace.replace('/', '');
