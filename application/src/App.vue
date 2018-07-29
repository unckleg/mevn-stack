<template>
    <div>
        <component v-bind:is="module"></component>
    </div>
</template>

<script>
    import Admin from './modules/admin/components/Layout'
    import Site from './modules/site/components/Layout'
    import Auth from './modules/admin/auth/views/Auth';

    import Store from './store';

    export default {
        computed: {
            module () {
                return Store.getters['Layout/module']
            }
        },

        components: {
            'admin': Admin,
            'site': Site,
            'auth': Auth
        }
    }
</script>
