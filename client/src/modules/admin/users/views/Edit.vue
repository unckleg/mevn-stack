<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Edit User</h1>
            <small class="text-muted">Update existing user information.</small>
            <button class="btn m-b-xs w-xs btn-primary btn-rounded btn-cta" @click="$router.push({ name: 'admin_users'})">
                Back
            </button>
        </div>
        <div class="wrapper-md">
            <user-form></user-form>
        </div>
    </div>
</template>

<script>
    import UserForm from './forms/UserForm';
    import store from '@/store'
    import { types, ns } from './../store/types';
    import { mapGetters } from 'vuex';

    export default {
        name: 'user-edit',
        components: {
            UserForm
        },

        computed: {
            ...mapGetters({
                user: types.getters.GET_USER
            })
        },

        mounted () {
            this.EventBus.$once(types.actions.UPDATE_USER, async (formData = null) => {
                await this.$store.dispatch(types.actions.UPDATE_USER);
                if (formData) {
                    await this.$store.dispatch(types.actions.UPLOAD_AVATAR, formData);
                }

                this.$router.push({ name: 'admin_users' });
            });
        },

        async beforeRouteUpdate (to, from, next) {
            await store.dispatch(types.actions.RESET_STATE);
            return next();
        },

        async beforeRouteEnter (to, from, next) {
            await store.dispatch(types.actions.RESET_STATE);
            if (to.params.id !== undefined) {
                store.dispatch(types.actions.FORM_ACTION, types.actions.UPDATE_USER);
                await store.dispatch(types.actions.FETCH_USER,
                    to.params.id,
                );
            }

            return next();
        },

        async beforeRouteLeave (to, from, next) {
            await store.dispatch(types.actions.RESET_STATE);
            next();
        }
    }
</script>