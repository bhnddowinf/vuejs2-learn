
# vue-router 原文文档 for Vue.js 2 (尤雨溪大神)

- http://router.vuejs.org/en/index.html vue-router 原文文檔

- http://router.vuejs.org/zh-cn/index.html vue-router 中文文檔

- https://github.com/vuejs/vue-router vue-router github

# 1. 安装 (环境要求为 vue-cli )

``` js

npm install vue-router

```

如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：

``` js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```