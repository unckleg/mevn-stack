<template>
    <span v-show="errorBag.has(fieldName)" class="alert-danger">
        {{ errorBag.first(fieldName) }}
    </span>
</template>

<script>
    export default {
        name: 'input-error',
        props: ['fieldName', 'errorBag']
    }
</script>