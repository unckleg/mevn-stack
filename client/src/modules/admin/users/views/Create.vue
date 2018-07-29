<template>
    <div>
        <div class="bg-light lter b-b wrapper-md">
            <h1 class="m-n font-thin h3">Add User</h1>
            <small class="text-muted">Relate new user to collection of others</small>
            <button class="btn m-b-xs w-xs btn-primary btn-rounded" style="margin-top: -30px;float: right;" @click="$router.push({ name: 'admin_users'})">
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
    export default {
        name: 'Create',
        components: {
            UserForm
        }
    }
</script>
