import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './../modules/admin/auth/store';
import AdminDashboard from './../modules/admin/dashboard/store';
import Layout from './../store/layout';

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        Auth,
        AdminDashboard,
        Layout
    }
});

export default Store;
