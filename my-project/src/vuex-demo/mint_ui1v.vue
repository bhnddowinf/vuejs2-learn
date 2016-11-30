<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--参照官网的写法 button -->
    <mtbutton  @click="method_a" type ="primary" >mint Button demo (@click)</mtbutton>

    <mtbutton  @click.native="method_a" type ="primary" >mint Button demo (@click.native)</mtbutton>

    <!--如果你没信心…可以改成这样-->
    <button @click="method_a" class="mint-button mint-button--primary mint-button--normal">原生 Button demo</button>
  </div>
</template>

<script>

// -- mint-ui start
// http://mint-ui.github.io/docs/#!/zh-cn2/button
// /my-project/node_modules/mint-ui/lib/button
//import mtButton from 'mint-ui/lib/button';

import { Button } from 'mint-ui';
import 'mint-ui/lib/button/style.css';

// http://mint-ui.github.io/docs/#!/zh-cn2/toast
// /my-project/node_modules/mint-ui/lib/toast
import { Toast } from 'mint-ui';
import 'mint-ui/lib/toast/style.css';
// -- mint-ui end



export default {
  components:{
    'mtbutton': Button,
  },
  data () {
    return {
      msg: '使用 mint-ui !'
    }
  },
  methods :{
    'method_a':function (event){
      console.log('methods_a 执行了! '+event);
      this.msg='';
      let instance = Toast('提示信息');
      setTimeout(() => {
        instance.close();
      }, 2000);
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
