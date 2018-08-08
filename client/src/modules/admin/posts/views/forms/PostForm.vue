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
                                   v-validate="'required'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'title'"></admin-input-error>
                        </div>

                        <div class="form-group">
                            <label>Content</label>
                            <textarea
                                   id="text-content"
                                   class="form-control"
                                   placeholder="Enter post content"
                                   name="text"
                                   v-validate="'required'">
                            </textarea>
                            <admin-input-error :errorBag="errors" :fieldName="'text'"></admin-input-error>
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
                                   class="form-control"
                                   autocomplete="off"
                                   name="publish_date"
                                   v-validate="'required'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'publish_date'"></admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Categories</label>
                            <select class="form-control select2"
                                    name="categories"
                                    v-validate="'required'"
                            >
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                            </select>
                            <admin-input-error :errorBag="errors" :fieldName="'categories'"></admin-input-error>
                        </div>
                        <div class="form-group">
                            <label>Tags</label>
                            <input type="text"
                                   class="form-control"
                                   autocomplete="off"
                                   name="tags"
                                   data-role="tagsinput"
                                   v-validate="'required'"
                            >
                            <admin-input-error :errorBag="errors" :fieldName="'tags'"></admin-input-error>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="panel panel-default">
                    <div class="panel-heading font-bold">Media</div>
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
    .fr-toolbar {
        border-top: transparent;
    }

    @import './../../../../../../static/vendor/wysiwyg/froala.min.css';
    @import './../../../../../../static/vendor/wysiwyg/froala_style.min.css';
</style>

<script>
    require('./../../../../../../static/vendor/wysiwyg/froala.min');

    import AdminInputError from '@modules/admin/components/ErrorInput';

    export default {
        name: 'admin-post-form',

        components: {
            AdminInputError
        },

        mounted() {
            this.editor('#text-content', { heightMin: 350 });
            this.select2('.select2');
        },

        methods: {
            validateAndProcess() {
                this.$validator.validateAll().then((result) => {

                });
            },
        }
    }
</script>
