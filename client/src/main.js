import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import helpers from '@util/helpers';
import mixin from '@util/mixin';
import VeeValidate from 'vee-validate';

// vendor imports
helpers.loadVendors();

Vue.config.productionTip = false;
Vue.mixin(mixin);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,

    components: {
        App
    },

    template: '<App/>',

    created() {
        helpers.resolveModuleLayout(store, router);
    },

    watch: {
        '$route' (to, from) {
            helpers.resolveModuleLayout(store, router);
        }
    }
});
