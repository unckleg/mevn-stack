<template>
    <div class="app app-header-fixed">
        <template v-if="errorBag.length">
            <error-layout></error-layout>
        </template>
        <template v-else>
            <Header></Header>
            <Sidebar></Sidebar>

            <div id="content" class="app-content" role="main">
                <div class="app-content-body">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>

            <Footer></Footer>
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
    import Header from './Header';
    import Footer from './Footer';
    import Sidebar from './Sidebar';
    import ErrorLayout from './ErrorLayout.vue';

    import { mapGetters } from 'vuex';
    import { types } from '@core/store/types';

    export default {
        components: {
            Header,
            Footer,
            Sidebar,
            ErrorLayout
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
