<template>
    <div>
        <!--file : /my-project/src/vuex-demo/v01.vue -->
        <!--// view (视图) -->
        <h1>{{ count }}</h1>
        <button @click="increment">count + 1</button>
        <mbtn @click="increment">count + 1</mbtn>

    </div>
</template>
<script>

// -- mint-ui start
import mintButton from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';
// -- mint-ui end
export default {
    components: {
        'mbtn':mintButton
    },

    // state (状态)
    data() {
        return {
                count: 0
            }
    },
    methods: {
        // actions (动作)
        increment() {
            this.count = this.count + 1;
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: #42b983;
}
</style>
