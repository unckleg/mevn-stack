import Vue from 'vue'
import Router from 'vue-router'
import axios from './../service/axios';

Vue.use(Router);

let routes = [];
const req = require.context('../modules/', true, /router\.js$/);

req.keys().map(key => {
    routes = routes.concat(req(key).default);
});

const token = localStorage.getItem('auth-token');
if (token) {
    axios.defaults.headers.common['Authorization'] = token;
}

export default new Router({
    routes,
    mode: 'history'
});
