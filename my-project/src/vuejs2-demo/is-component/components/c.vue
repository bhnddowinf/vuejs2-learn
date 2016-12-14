<template>
    <div v-bind:style="{ top: calsss}">
        789
    </div>
</template>
<script>
    export default {
        props: ['calsss'],
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>