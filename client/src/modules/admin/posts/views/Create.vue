<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Add Post</h1>
            <small class="text-muted">Relate new post to collection of others</small>
            <button class="btn m-b-xs w-xs btn-primary btn-rounded btn-cta" @click="$router.push({ name: 'admin_posts'})">
                Back
            </button>
        </div>
        <div class="wrapper-md">
            <admin-post-form></admin-post-form>
        </div>
    </div>
</template>

<script>
    import AdminPostForm from './forms/PostForm.vue';

    export default {
        name: 'admin-post-create',
        components: {
            AdminPostForm
        }
    }
</script>
