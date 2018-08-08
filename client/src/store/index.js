import Vuex           from 'vuex';
import Vue            from 'vue';
import Core           from './../modules/core/store';
import AdminAuth      from './../modules/admin/auth/store';
import AdminDashboard from './../modules/admin/dashboard/store';
import AdminUsers     from './../modules/admin/users/store';
import AdminPosts     from './../modules/admin/posts/store';

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        Core,
        AdminAuth,
        AdminDashboard,
        AdminUsers,
        AdminPosts
    }
});

export default Store;
