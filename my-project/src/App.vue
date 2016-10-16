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
    <h3>Vue.Js 2 全家桶起步篇</h3>
    <ul>
      <li><a href='h0201.html'>(01) Hello 组件</a></li>
      <li><a href='h0202.html'>(02) 声明式渲染</a></li>
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
</style>
