import axios from '@util/axios';

let resource = 'admin/users';
export const UsersService = {
    init (res = '') {
        resource = res.length ? res : resource;
        return this;
    },

    fetchAll () {
        return axios.get(resource);
    },

    fetchOne () {

    },

    create (data) {
        return axios.post(`${resource}/create`, data);
    },

    delete (id) {
        return axios.post(`${resource}/delete`, {user_id: id});
    }
};