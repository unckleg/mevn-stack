<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Posts</h1>
            <small class="text-muted">Posts management section</small>
            <button class="btn m-b-xs w-xs btn-primary btn-rounded btn-cta" @click="$router.push({ name: 'admin_posts_create' })">
                Add Post
            </button>
        </div>
        <div class="wrapper-md">
            <div class="panel panel-default">
                <div class="panel-heading font-bold">
                    Post List
                </div>
                <div class="table-responsive">
                    <table id="posts-table" class="table table-striped b-t b-b">
                        <thead>
                        <tr>
                            <th style="width: 5%">#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publish Date</th>
                            <th>Tags</th>
                            <th>Comments</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(post, index) in posts">
                            <td>{{ index + 1 }}</td>
                            <td>{{ post.title }}</td>
                            <td>
                                <a @click="$router.push({ name: 'admin_users_edit', params: { id: post.postedBy._id } })">
                                    {{ post.postedBy.username }}
                                </a>
                            </td>
                            <td>{{ new Date(post.publish_date).toDateString() }}</td>
                            <td>{{ post.tags.length }}</td>
                            <td>{{ post.comments.length }}</td>
                            <td>
                                <span class="label text-base bg-info pos-rlt">
                                    {{ post.status.title }}
                                </span>
                            </td>
                            <td>
                                <button class="btn m-b-xs btn-info">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn m-b-xs btn-danger">
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
    import { types } from './../store/types';
    import { mapGetters } from 'vuex';

    export default {
        name: 'admin-posts',

        computed: {
            ...mapGetters({
                posts: types.getters.GET_POSTS
            })
        },

        created () {
            this.$store.dispatch(types.actions.FETCH_POSTS).then(() => {
                this.datatable('#posts-table', {}, 0);
            });
        }
    }
</script>