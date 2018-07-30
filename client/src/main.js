import Vue from 'vue'
import router from './router'
import store from './store';
import helpers from '@util/helpers';
import App from './App';
import mixin from '@util/mixin';

Vue.config.productionTip = false;
Vue.mixin(mixin);

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
        document.title = router.currentRoute.meta.title;
        helpers.resolveModuleLayout(store, router);
    },

    watch: {
        '$route' (to, from) {
            document.title = router.currentRoute.meta.title;
            helpers.resolveModuleLayout(store, router);
        }
    }
});
