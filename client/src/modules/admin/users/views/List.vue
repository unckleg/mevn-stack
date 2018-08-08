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
                    <table id="users-table" class="table table-striped b-t b-b">
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
                                    <button class="btn m-b-xs btn-danger"
                                            @click="modalData = {id: user._id}; showModal = true;">
                                        <i class="fa fa-trash-o"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <admin-modal :show-modal="showModal" :modal-data="modalData">
            <template slot="modal-header">Warning!</template>
            <template slot="modal-question">Are you sure you want to remove user ?</template>
            <template slot="modal-btn-close">
                <button class="btn btn-default" @click="showModal = false; modalData = {}">Close</button>
            </template>
        </admin-modal>
    </div>
</template>

<script>
    import AdminModal from './../../components/Modal.vue';

    import { types } from './../store/types';
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        name: 'admin-users',
        components: {
            AdminModal
        },

        computed: {
            ...mapGetters({
                users: types.getters.GET_USERS
            })
        },

        methods: {
            async remove(id) {
                await this.$store.dispatch(types.actions.DELETE_USER, id);
                this.$store.dispatch(types.actions.FETCH_USERS);
            }
        },

        data() {
            return {
                showModal: false,
                modalData: {}
            }
        },

        created () {
            this.$store.dispatch(types.actions.FETCH_USERS).then(() => {
                this.datatable('#users-table', {}, 0);
            });

            this.EventBus.$on('modal-confirmed', () => {
                this.remove(this.modalData['id']);
                this.showModal = false;
                this.modalData = {};
            });
        }
    }
</script>

<style>
    .fadeIn-transition { transition: opacity 0.3s linear; }
    .fadeIn-enter, .fadeIn-leave { opacity: 0; }
</style>