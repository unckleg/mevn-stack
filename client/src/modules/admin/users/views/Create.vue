<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Add User</h1>
            <small class="text-muted">Relate new user to collection of others</small>
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
        name: 'user-create',
        components: {
            UserForm
        },

        mounted () {
            this.EventBus.$once(types.actions.CREATE_USER, async (formData = null) => {
                let response = await this.$store.dispatch(types.actions.CREATE_USER);
                if (formData) {
                    formData.delete('_id');
                    formData.append('_id', response.user._id);
                    await this.$store.dispatch(types.actions.UPLOAD_AVATAR, formData);
                }

                this.$router.push({ name: 'admin_users' });
            });
        },

        async beforeRouteEnter (to, from, next) {
            store.dispatch(types.actions.FORM_ACTION, types.actions.CREATE_USER);
            return next();
        },

        async beforeRouteUpdate (to, from, next) {
            await store.dispatch(types.actions.RESET_STATE);
            next();
        },

        async beforeRouteLeave (to, from, next) {
            await store.dispatch(types.actions.RESET_STATE);
            next();
        }
    }
</script>
