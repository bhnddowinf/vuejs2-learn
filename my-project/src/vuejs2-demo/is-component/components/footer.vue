<template>
  <footer class="page">
    foter
  </footer>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props: {
            isSelect: {
                type: String,
            },
        },
        methods: {
            barSelect(flag){
                this.$router.push({path: flag});
            },
        }
    }


</script>