import helpers from '@util/helpers';

let namespace = 'AdminPosts/';
export const types = {
    actions: {
        FETCH_POSTS: namespace + 'FETCH_POSTS',
    },

    getters: {
        GET_POSTS: namespace + 'GET_POSTS'
    },

    mutations: {
        SET_POSTS: namespace + 'SET_POSTS',
    }
};

export const _types = helpers.removeNamespace(namespace, types);
export const ns = namespace.replace('/', '');
