<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png">
        <hello></hello>
        <p>
            欢迎大家来学习 台湾小凡最爱的 Vue.js app!
        </p>
        <div align="center">
            <a href='https://github.com/bhnddowinf/vuejs2-learn'>台湾小凡 Vue.Js 2 官网讲解</a>
            <h3>VueJs 豪哥的QQ群：364912432</h3>
            <h3>第01章：vue-cli</h3>
            <ul>
                <li>
                    <span class="list-item">mint-ui</span>
                    <span class="right">
                        <a href='mint_ui1.html'>示例</a>
                        | 
                        <a href='https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1v.vue' target="_new">源码</a>
                    </span>
                </li>
                <li>
                    <span class="list-item">多页应用 Hello 组件</span>
                    <a href='h0201.html'>示例</a>
                     | 
                    <a href='https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/02-GattingStarted/v0201.vue' target="_new">源码</a>    
                </li>
                <li>
                    <span class="list-item">多页应用 声明式渲染</span>
                    <a href='h0202.html'>示例</a>
                    |
                    <a href='https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/02-GattingStarted/v0202.vue' target="_new">源码</a>    
                    
                </li>
            </ul>
            <h3>第02章：Vuex</h3>
            <ul>
                <li>
                    <span class="list-item">(vuex)(01) 什么是 vuex </span>
                    <a href='vuex01.html'>示例</a>
                    |
                    <a href='https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v01.vue' target='_new'>源码</a>
                </li>
                <li>
                    <span class="list-item">(vuex)(02) vuex 增加、减少  </span>
                    <a href='vuex02.html'>示例 </a>
                    |
                    <a href="https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_counter.vue" target="_new">源码</a>
                </li>
                <li>
                    <span class="list-item">(vuex)(03) vuex 增加、减少 模块化 </span>
                    <a href='counter_hot.html'>示例 </a>
                    |
                    <a href="https://github.com/bhnddowinf/vuejs2-learn/tree/master/my-project/src/vuex-demo" target="_new">源码</a>
                </li>
                <li>
                    <span class="list-item">(vuex)(04) Todo</span>
                    <a href='todomvc.html'> 示例 </a>
                    |
                    <a href="https://github.com/bhnddowinf/vuejs2-learn/tree/master/my-project/src/vuex-demo"target="_new">源码</a>
                </li>
                <li>
                    <span class="list-item">(vuex)(05) Shopping cart</span>
                    <a href='shopping_cart.html'> 示例 </a>
                    |
                    <a href="https://github.com/bhnddowinf/vuejs2-learn/tree/master/my-project/src/vuex-demo"target="_new">源码</a>
                </li>    
                
            </ul>
            <h3>第03章：vue.js 2 示例区</h3>
            <ul>
                <li>
                    <span class="list-item">Tree View 递归组件</span>
                    <a href='treeview.html'> 示例 </a>
                    |
                    <a href='https://github.com/bhnddowinf/vuejs2-learn/tree/master/my-project/src/vuejs2-demo/treeview' target="_new">源码</a>    
                </li>
                <li>
                    <span class="list-item">动态组件 使用 is </span>
                    <a href='iscomponent.html'>示例 </a>
                    |
                    <a href='https://github.com/bhnddowinf/vuejs2-learn/tree/master/my-project/src/vuejs2-demo/is-component' target="_new">源码</a>
                </li>               
            </ul>
        </div>
    </div>
</template>
<script>
import Hello from './components/Hello'

export default {
    components: {
        Hello
    }
}
</script>
<style>
html {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

#app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 900px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
}

#app a {
    color: #42b983;
    text-decoration: none;

    
}

.logo {
    width: 100px;
    height: 100px
}

li {
    list-style-type: none;
    text-align:left;
    line-height:20px;
}
.right {
    /*
    text-align: left;
    float: left;
    */
}
.list-item {
    display: inline-block;
    width:500px;
}
</style>
