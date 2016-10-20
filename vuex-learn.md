
# vuex 原文文档 for Vue.js 2 (尤雨溪大神)

- http://vuex.vuejs.org/en/index.html

- https://github.com/vuejs/vuex

![vuex flow](http://vuefe.cn/vuex/images/flow.png)

![vuex flow 2](http://vuefe.cn/vuex/images/vuex.png)

# 1.如何安装 vuex (限定开发环境为 vue-cli)

``` js

  sudo npm install -g vue-cli

  sudo vue init webpack my-project

  cd my-project

  sudo npm install

  已完成上述流程，

  sudo npm install vuex -s

```

  其他需求，请参考 http://vuefe.cn/vuex/installation.html

# 2.什么是 Vuex

- http://vuefe.cn/vuex/intro.html
- 讲解：此章节中，有代码，实际上要在 vue-cli 呈现出来为何？

    建立下述观念：

    1.state (状态)，驱动我们应用的真实的源；
    2.view (视图)，对应着 状态 的声明式映射；
    3.actions (动作)，用户在 视图 上的输入引起状态的更改的可能方式。

    - demo https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/vuex01.html
    - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v01_app.js
    - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v01.vue

# 3.起步

- http://vuefe.cn/vuex/getting-started.html

## 3-1.学习 es2015

- https://babeljs.io/docs/learn-es2015/ 官网推的 学习 es2015网址，看得蛮累的

- http://es6.ruanyifeng.com/#README 阮一峰着 ，看这个比较好理解

  虽然这是很重要的章节，在此只简单介绍，不然认真讲，至少要2小时

## 3-2.vuex 增加、减少 示例

这是尤雨溪大神写的 vuex ，加、减示例，小凡在此用 vue-cli 呈现。

- demo https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/vuex02.html
- 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_app.js
- 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_counter.vue
- 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_store.js
- 

# 4.State

-  http://vuefe.cn/vuex/state.html

# 5.Getters

 - http://vuefe.cn/vuex/getters.html

# 6.Mutations

 - http://vuefe.cn/vuex/mutations.html

# 7.Actions

-  http://vuefe.cn/vuex/actions.html

# 8.Modules

-  http://vuefe.cn/vuex/modules.html

# 9.应用结构

-  http://vuefe.cn/vuex/structure.html

# 10.插件

-  http://vuefe.cn/vuex/plugins.html

# 11.严格模式

-  http://vuefe.cn/vuex/strict.html

# 12.表单处理

-  http://vuefe.cn/vuex/forms.html

# 13.测试

-  http://vuefe.cn/vuex/testing.html

# 14.热重载

-  http://vuefe.cn/vuex/hot-reload.html

# 15.API

-  http://vuefe.cn/vuex/api.html
