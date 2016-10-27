
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

# 2. 如果要把 vue-router 纳入 vuex 的 state 中使用

- https://github.com/vuejs/vuex-router-sync

``` js

# for vuex & vue-router >= 2.0:
npm install vuex-router-sync@next

```

``` js
import { sync } from 'vuex-router-sync'
import store from './vuex/store' // vuex store instance
import router from './router' // vue-router instance

sync(store, router) // done.

// bootstrap your app...

```