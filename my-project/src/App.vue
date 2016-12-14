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
                <li><a href='mint_ui1.html'>mint-ui demo</a></li>
                <li><a href='h0201.html'>多页应用 Hello 组件</a></li>
                <li><a href='h0202.html'>多页应用 声明式渲染</a></li>
            </ul>
            <h3>第02章：Vuex</h3>
            <ul>
                <li><a href='vuex01.html'>(vuex)(01) 什么是 vuex </a></li>
                <li><a href='vuex02.html'>(vuex)(02) vuex 增加、减少 示例 </a></li>
                <li><a href='counter_hot.html'>(vuex)(03) vuex 增加、减少 模块化 示例 </a></li>
                <li><a href='todomvc.html'>(vuex)(04) Todo 示例 </a></li>
                <li><a href='shopping_cart.html'>(vuex)(05) Shopping cart 示例 </a></li>
            </ul>
            <h3>第03章：vue.js 2 示例区</h3>
            <ul>
                <li><a href='treeview.html'>Tree View 递归组件 示例 </a></li>
                <li><a href='iscomponent.html'>动态组件 使用 is 示例 </a></li>                
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
    max-width: 600px;
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
}
</style>
