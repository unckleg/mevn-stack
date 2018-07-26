import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './../modules/admin/auth/store';
import AdminDashboard from './../modules/admin/dashboard/store';

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        Auth,
        AdminDashboard
    }
});

export default Store;
