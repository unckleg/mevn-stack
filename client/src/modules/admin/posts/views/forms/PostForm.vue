<template>
    <div class="row">
        <form role="form" @submit.prevent="validateAndProcess">
            <div class="col-sm-9">
                <div class="panel panel-default">
                    <div class="panel-heading font-bold">General</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text"
                                   class="form-control input-lg"
                                   placeholder="Enter post title"
                                   autocomplete="off"
                                   name="title"
                                   v-model="title"
                                   v-validate="'required'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'title'">
                            </admin-input-error>
                        </div>

                        <div class="form-group">
                            <label>Content</label>
                            <textarea
                                   id="text-content"
                                   class="form-control"
                                   placeholder="Enter post content"
                                   name="text"
                                   v-model="text"
                                   v-validate="'required'"
                                   :data-state-namespace="stateNamespace"
                                   data-state-mutator="post">
                            </textarea>
                            <admin-input-error :errorBag="errors" :fieldName="'text'">
                            </admin-input-error>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="panel panel-default">
                    <div class="panel-heading font-bold">Meta</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label>Publish Date</label>
                            <input type="text"
                                   class="form-control datetimepicker"
                                   autocomplete="off"
                                   name="publish_date"
                                   v-model="publish_date"
                                   v-validate="'required'"
                                   :data-state-namespace="stateNamespace"
                                   data-state-mutator="post"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'publish_date'">
                            </admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Categories</label>
                            <select class="form-control select2"
                                    name="categories"
                                    multiple="multiple"
                                    v-validate="'required'"
                                    v-model="categories"
                                    :data-state-namespace="stateNamespace"
                                    data-state-mutator="post"
                            >
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                            </select>
                            <admin-input-error :errorBag="errors" :fieldName="'categories'">
                            </admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Tags</label>
                            <input type="text"
                                   class="form-control"
                                   autocomplete="off"
                                   name="tags"
                                   data-role="tagsinput"
                                   v-model="tags"
                                   v-validate="'required'"
                                   :data-state-namespace="stateNamespace"
                                   data-state-mutator="post"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'tags'">
                            </admin-input-error>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="panel panel-default">
                    <div class="panel-heading font-bold">
                        Media
                    </div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label>Image</label>
                            <div class="img-form">
                                <img src="http://www.smashingphotoz.com/wp-content/uploads/2012/11/10-angel-explosion.jpg">
                            </div>
                            <br/>
                            <input type="file" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
    @import './../../../../../../static/vendor/wysiwyg/froala.min.css';
    @import './../../../../../../static/vendor/wysiwyg/froala_style.min.css';
</style>

<script>
    import AdminInputError from '@modules/admin/components/ErrorInput';

    import { types, ns } from './../../store/types';
    import { mapFields } from 'vuex-map-fields';

    export default {
        name: 'admin-post-form',
        components: {
            AdminInputError
        },

        computed: {
            ...mapFields(ns, [
                'post.title',
                'post.text',
                'post.tags',
                'post.categories',
                'post.publish_date',
                'post.status'
            ])
        },

        methods: {
            validateAndProcess() {
                this.$validator.validateAll().then((result) => {

                });
            },
        },

        data() {
            return {
                stateNamespace: ns
            }
        },

        mounted() {
            this.editor('#text-content', { heightMin: 350 });
            this.select2('.select2', { multiple: true});
            this.datetimepicker('.datetimepicker');
            this.tagsInput('[data-role="tagsinput"]');
        }
    }

    require('./../../../../../../static/vendor/wysiwyg/froala.min');
</script>
