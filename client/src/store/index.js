import Vuex from 'vuex';
import Vue from 'vue';

// Store Modules
import Layout from './../store/layout';
import AdminAuth from './../modules/admin/auth/store';
import AdminDashboard from './../modules/admin/dashboard/store';
import AdminUsers from './../modules/admin/users/store';

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        Layout,

        AdminAuth,
        AdminDashboard,
        AdminUsers
    }
});

export default Store;
