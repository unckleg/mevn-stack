<template>
    <div class="app app-header-fixed">
        <div class="container w-xxl w-auto-xs">

            <div class="text-center" v-if="message.length">
                <a class="btn btn-sm btn-danger padder-md m-b">{{ message }}</a>
            </div>

            <router-link to="/" class="navbar-brand block m-t">
                Home
            </router-link>
            <div class="m-b-lg">
                <div class="wrapper text-center">
                    <strong>Sign in to access admin</strong>
                </div>

                <form name="form" class="form-validation" @submit.prevent="authenticate">
                    <div class="text-danger wrapper text-center"></div>
                    <div class="list-group list-group-sm">
                        <div class="list-group-item">
                            <input type="text"
                                   placeholder="Username"
                                   class="form-control no-border"
                                   required
                                   v-model="user.username"
                            >
                        </div>
                        <div class="list-group-item">
                            <input type="password"
                                   placeholder="Password"
                                   class="form-control no-border"
                                   required
                                   v-model="user.password"
                            >
                        </div>
                    </div>

                    <button type="submit" class="btn btn-lg btn-primary btn-block">
                        Log in
                    </button>
                </form>
            </div>
            <div class="text-center">
                <p>
                    <small class="text-muted">MEVN Stack<br>&copy; 2018</small>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {types} from './../store/types';

    export default {
        data () {
            return {
                user: {
                    username: '',
                    password: ''
                },

                message: ''
            }
        },

        methods: {
            authenticate() {
                const {username, password} = this.user;
                this.$store.dispatch(types.actions.AUTH_REQUEST, {username, password}).then(() => {
                    this.$router.push({
                        name: 'admin_dashboard'
                    });
                }).catch(err => {
                    this.message = err.message;
                });
            }
        }
    }
</script>

<style lang="scss">
    @import './../../../../../static/vendor/animate.css/animate.css';
    @import './../../../../../static/vendor/font-awesome/css/font-awesome.min.css';
    @import './../../../../../static/vendor/simple-line-icons/css/simple-line-icons.css';
    @import './../../../../../static/vendor/jquery/bootstrap/dist/css/bootstrap.css';
    @import './../../../../../static/css/app.min.css';
</style>
