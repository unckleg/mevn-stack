<template>
    <div class="container w-xxl w-auto-xs">
        <div class="text-center m-b-lg">
            <h1 class="text-shadow text-white">404</h1>
        </div>
        <div class="list-group bg-info auto m-b-sm m-b-lg">
            <a @click="purgeErrors" class="list-group-item">
                <i class="fa fa-chevron-right text-muted"></i>
                <i class="fa fa-fw fa-mail-forward m-r-xs"></i>
                Dashboard
            </a>
        </div>
        <div class="text-center">
            <p>
                <small class="text-muted">Web app framework base on Bootstrap and AngularJS<br>© 2014</small>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { types } from '@core/store/types';

    export default {
        name: 'admin-error-layout',

        methods: {
            ...mapActions({
                purgeErrors: types.actions.PURGE_ERRORS
            })
        }
    }
</script>