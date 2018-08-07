import helpers from '@util/helpers';

let namespace = 'AdminPosts/';
export const types = {
    actions: {
    },

    getters: {
    },

    mutations: {
    }
};

export const _types = helpers.removeNamespace(namespace, types);
export const ns = namespace.replace('/', '');
