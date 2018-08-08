<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Edit Post</h1>
            <small class="text-muted">Update existing post information.</small>
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
        name: 'admin-post-edit',
        components: {
            AdminPostForm
        }
    }
</script>
