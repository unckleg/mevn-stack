<template>
    <div class="app app-header-fixed">
        <template v-if="errorBag.length">
            <admin-error-layout></admin-error-layout>
        </template>
        <template v-else>
            <admin-header></admin-header>
            <admin-sidebar></admin-sidebar>

            <div id="content" class="app-content" role="main">
                <div class="app-content-body">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>

            <admin-footer></admin-footer>
        </template>
    </div>
</template>

<style lang="scss">
    @import './../../../../static/vendor/animate.css/animate.css';
    @import './../../../../static/vendor/font-awesome/css/font-awesome.min.css';
    @import './../../../../static/vendor/simple-line-icons/css/simple-line-icons.css';
    @import './../../../../static/vendor/jquery/bootstrap/dist/css/bootstrap.css';
    @import './../../../../static/css/app.min.css';
    @import './../../../../static/vendor/jquery/datatable/datatable.bootstrap.css';
    @import './../../../../static/css/custom.css';
</style>

<script>
    import AdminHeader from './Header';
    import AdminFooter from './Footer';
    import AdminSidebar from './Sidebar';
    import AdminErrorLayout from './ErrorLayout';

    import { mapGetters } from 'vuex';
    import { types } from '@core/store/types';

    export default {
        components: {
            AdminHeader,
            AdminFooter,
            AdminSidebar,
            AdminErrorLayout
        },

        computed: {
            ...mapGetters({
                errorBag: types.getters.GET_ERRORS
            })
        }
    }

    require('./../../../../static/js/app.min');
    require('./../../../../static/vendor/jquery/datatable/datatable.min');
    require('./../../../../static/vendor/jquery/datatable/datatable.bootstrap');
</script>
