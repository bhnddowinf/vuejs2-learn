<template>
    <div>

        <div style="margin-top:60px">
            <component v-bind:is="currentView1"></component>
            <component v-bind:is="currentView2"></component>
            <component v-bind:is="currentView3"></component>
        </div>
        <button v-on:click="methods1()">123</button>
        <button v-on:click="methods2()">213</button>
        <button v-on:click="methods3()">321</button>        

    </div>
</template>
<script>

    import aaa from './../components/a.vue'
    import bbb from './../components/b.vue'
    import ccc from './../components/c.vue'
    export default{
        components: {

            aaa,
            bbb,
            ccc
        },
        data(){
            return {
                currentView1: 'aaa',
                currentView2: 'bbb',
                currentView3: 'ccc'                                
            }
        },
        created(){
            //this.init();
        },
        methods: {
            init(){
                var _self = this;              
            },
            methods1:function () {
                console.log('1')
                this.currentView1= 'aaa'
                this.currentView2= 'bbb'
                this.currentView3= 'ccc'                     
            },
            methods2:function () {
                console.log('2')
                this.currentView1= 'bbb'
                this.currentView2= 'ccc'
                this.currentView3= 'aaa'   
            },
            methods3:function () {
                console.log('3')
                this.currentView1= 'ccc'
                this.currentView2= 'bbb'
                this.currentView3= 'aaa'                                                         
            },
        },
        computed: {
        }
    }
</script>