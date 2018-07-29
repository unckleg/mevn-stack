import Vuex from 'vuex';
import Vue from 'vue';

// Store Modules
import Auth from './../modules/admin/auth/store';
import AdminDashboard from './../modules/admin/dashboard/store';
import Layout from './../store/layout';
import Users from './../modules/admin/users/store';

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        Auth,
        AdminDashboard,
        Layout,
        Users
    }
});

export default Store;
