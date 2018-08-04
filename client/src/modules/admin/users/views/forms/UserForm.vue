<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default">
                <div class="panel-heading font-bold">Form</div>
                <div class="panel-body">
                    <form role="form" @submit.prevent="validateAndProcess">
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text"
                                   class="form-control"
                                   placeholder="Enter username"
                                   autocomplete="off"
                                   v-model="username"
                                   name="username"
                                   v-validate="'required|username'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'username'"></admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password"
                                   class="form-control"
                                   placeholder="Enter password"
                                   autocomplete="off"
                                   v-model="password"
                                   name="password"
                                   v-validate="shouldValidate.password ? 'required|confirmed:confirm_password' : ''"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'password'"></admin-input-error>
                            <br/>
                            <input type="password"
                                   class="form-control"
                                   placeholder="Repeat password"
                                   name="confirm_password"
                                   autocomplete="off"
                                   v-validate="shouldValidate.confirm_password ? 'required' : ''"
                                   ref="confirm_password"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'confirm_password'"></admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email"
                                   class="form-control"
                                   placeholder="Enter email"
                                   autocomplete="off"
                                   v-model="email"
                                   name="email"
                                   v-validate="'required|email|emailExist'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'email'"></admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text"
                                   class="form-control"
                                   placeholder="Enter first name"
                                   autocomplete="off"
                                   v-model="first_name"
                                   v-validate="'required'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'first_name'"></admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text"
                                   class="form-control"
                                   placeholder="Enter last name"
                                   autocomplete="off"
                                   v-model="last_name"
                            >
                        </div>
                        <div class="form-group">
                            <label>About</label>
                            <textarea class="form-control"
                                      placeholder="Enter about information"
                                      autocomplete="off"
                                      v-model="about"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <label>Avatar</label>
                            <div class="img-form" v-if="filePreview.length || avatar.length">
                                <img :src="filePreview ? filePreview : avatar">
                            </div>
                            <input type="file" class="form-control" @change="onAvatarPick">
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div class="form-group">
                            <div class="checkbox">
                                <label class="i-checks">
                                <input type="checkbox" v-model="is_active" checked="checked">
                                <i></i>
                                Active/Not Active
                                </label>
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <button type="submit" class="btn btn-sm btn-primary" :disabled="errors.any()">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminInputError from '@modules/admin/components/ErrorInput';

    import { types, ns } from './../../store/types';
    import { mapFields } from 'vuex-map-fields';
    import { rules } from './UserFormValidator';

    export default {
        name: 'admin-user-form',

        components: {
            AdminInputError
        },

        computed: {
            ...mapFields(ns, [
                'user.username',
                'user.password',
                'user.email',
                'user.first_name',
                'user.last_name',
                'user.about',
                'user.cover',
                'user.avatar',
                'user.is_active'
            ])
        },

        data() {
            return {
                types: types,
                shouldValidate: {
                    password: true,
                    confirm_password: true
                },

                filePreview: '',
                file: null,

                formAction: this.$store.getters[types.getters.GET_FORM_ACTION]
            }
        },

        created() {
            if (this.formAction === types.actions.UPDATE_USER) {
                this.shouldValidate.password = false;
                this.shouldValidate.confirm_password = false;
            }

            this.addValidationRules(this, rules);
        },

        methods: {
            validateAndProcess() {
                this.$validator.validateAll().then((result) => {

                    let formData = null;
                    if (this.file) {
                        formData = new FormData();
                        formData.append('avatar', this.file, this.file.name);
                        formData.append('_id', this.$store.getters[types.getters.GET_USER]._id);
                    }

                    if (result) {
                        this.EventBus.$emit(this.formAction, formData);
                    }
                });
            },

            onAvatarPick(e) {
                const file = e.target.files[0];
                this.file = file;
                this.filePreview = URL.createObjectURL(file);
            }
        }
    }
</script>
