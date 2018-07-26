import jquery from 'jquery';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

window.$ = jquery;
window.jQuery = jquery;

Vue.config.productionTip = false;

Vue.mixin({
    methods: {
        action: (module, action) => module + '/' + action
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,

    render: (h) => h(App),

    created() {
        document.title = router.currentRoute.meta.title;
    },

    watch: {
       '$route' (to, from) {
            document.title = router.currentRoute.meta.title;
        }
    }
});
