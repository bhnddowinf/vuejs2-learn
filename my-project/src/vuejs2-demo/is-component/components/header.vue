<template>
    <header class="header">
        <a style="color:white">{{dataNumber}}</a>
    </header>
</template>
<script>
    export default {
        props: {
            dataNumber: {
                type: Number,
            },
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
