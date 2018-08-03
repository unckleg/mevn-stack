<template>
    <div>
        <component v-bind:is="module"></component>
    </div>
</template>

<script>
    import Admin from './modules/admin/components/Layout'
    import Site from './modules/site/components/Layout'
    import Auth from './modules/admin/auth/views/Auth';

    import store from './store';
    import {types} from './modules/core/store/types';

    export default {
        computed: {
            module () {
                return store.getters[types.getters.GET_MODULE]
            }
        },

        components: {
            'admin': Admin,
            'site': Site,
            'auth': Auth
        }
    }
</script>
