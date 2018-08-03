<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Users</h1>
            <small class="text-muted">Users management section</small>
            <button class="btn m-b-xs w-xs btn-primary btn-rounded btn-cta" @click="$router.push({ name: 'admin_users_create'})">
                Add User
            </button>
        </div>
        <div class="wrapper-md">
            <div class="panel panel-default">
                <div class="panel-heading font-bold">
                    User List
                </div>
                <div class="table-responsive">
                    <table id="table" class="table table-striped b-t b-b">
                        <thead>
                            <tr>
                                <th style="width: 5%">#</th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users">
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <a class="thumb-sm">
                                    <img :src="user.avatar" class="r r-2x">
                                    </a>
                                </td>
                                <td>{{ user.first_name }} {{ user.last_name }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <template v-if="user.is_active">
                                        <span class="label text-base bg-info pos-rlt">
                                        Active
                                        </span>
                                    </template>
                                    <template v-else>
                                        <span class="label text-base bg-danger pos-rlt">
                                        Banned
                                        </span>
                                    </template>
                                </td>
                                <td>
                                    <button class="btn m-b-xs btn-info" @click="$router.push({ name: 'admin_users_edit', params: { id: user._id } })">
                                    <i class="fa fa-pencil"></i>
                                    </button>
                                    <button class="btn m-b-xs btn-danger" @click="remove(user._id)">
                                        <i class="fa fa-trash-o"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List';
    import { types } from './../store/types';
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        name: 'Users',
        components: {
            List
        },
    
        computed: {
            ...mapGetters({
                users: types.getters.GET_USERS
            })
        },

        created () {
            this.$store.dispatch(types.actions.FETCH_USERS).then(() => {
                this.datatable('#table', {}, 0);
            });
        },

        methods: {
            async remove(id) {
                await this.$store.dispatch(types.actions.DELETE_USER, id);
                this.$store.dispatch(types.actions.FETCH_USERS);
            }
        }
    }
</script>
