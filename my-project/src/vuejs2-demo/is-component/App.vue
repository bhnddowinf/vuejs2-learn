<template>
    <div>
        <h3>is 动态组件</h3>
        <home></home>
    </div>
    
</template>

<script>
 import home from './view/Home.vue'
    export default {
        data(){
            return {
                path: ''
            }
        },
        components: {
           home
        },
        methods:{

        }
    }
</script>