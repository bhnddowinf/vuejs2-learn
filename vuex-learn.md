
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

vuex 是什么，怎么搭，以及 要有用什么角度来理解这个插件

- [视频：什么是 vuex for (youtube)] (https://youtu.be/3tnclLf3Zw4)

- [视频：什么是 vuex for (bilibili)] (http://www.bilibili.com/video/av6829088/)

> ### 建立下述观念：

> 1. state (状态)，驱动我们应用的真实的源；

> 2. view (视图)，对应着 状态 的声明式映射；

> 3. actions (动作)，用户在 视图 上的输入引起状态的更改的可能方式。


# 问题： vuex，action ，mutations 做什么用的？


## (1) state

> 中文翻译成「状态」，建议尽量用 state 这个单字来阅读 vuex 文檔，不然你脑海一直出现状态状态状态，反而会卡死。

> 整个 vuex 是一颗 独立的 state tree,规定：只允许 mutation ，才能改变 state

```js
    const state = {
        count: 0
    }
```

## (2) mutation

> 更改 Vuex 的 store 中的 state 的唯一方法是提交 mutation。

> mutation，会与插件 devtools 协作，当 mutation 有变化时, 就做 state 的纪录，来协助开发者 debug，所以这里的代码要求同步，以便插件来调试。


> 来源：https://vuex.vuejs.org/zh-cn/mutations.html


## (3) Action 类似于 mutation，不同在于：

> Action 提交的是 mutation(让 mutation 处理插件的调试工作 )，而不是直接变更 state 。

> Action 可以包含任意异步操作。

> 来源：https://vuex.vuejs.org/zh-cn/actions.html








> ### Vuex 观念 demo
> - demo https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/vuex01.html
> - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v01_app.js
> - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v01.vue

# 3.起步

- http://vuefe.cn/vuex/getting-started.html

进阶讲解四个重要的单字，来把 vuex state 管理机制贯穿理解

- [视频：vuex 起步 (youtube)] (https://youtu.be/W3ja2hHWijg)

- [视频：vuex 起步 (bilibili)] (http://www.bilibili.com/video/av6829095/)


> ### vuex 增加、减少 demo
> - demo https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/vuex02.html
> - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_app.js
> - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_counter.vue
> - 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_store.js


## 3-1.学习 es2015

- https://babeljs.io/docs/learn-es2015/ 官网推的 学习 es2015网址，看得蛮累的 (原文)

- https://github.com/lukehoban/es6features Overview of ECMAScript 6 features (原文)

- http://es6.ruanyifeng.com/#README 阮一峰着 ，看这个比较好理解

  虽然这是很重要的章节，在此只简单介绍，不然认真讲，至少要2小时

## 3-2.vuex 增加、减少 示例

这是尤雨溪大神写的 vuex ，加、减示例，小凡在此用 vue-cli 呈现。

> ### vuex 增加、减少 demo
>- demo https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/vuex02.html
>- 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_app.js
>- 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_counter.vue
>- 源码 https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/v02_store.js


# 教学章节，为何会这样子排序

```

因为vuex，本身简单

那为何初学者, 看尤雨溪大神的的vuex代码，常常会抓瞎呢？

因为…es2015模块化

才是所有 mvvm 最核心的 know how (此 mvvm 包含 react ，ng)

您不先讲这个，是无法把vuex精最精华的地方讲通。

```

> ### es 2015模块化 好文
> https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/
> https://segmentfault.com/a/1190000004100661


> ### 阮一峰 (es6 Module)
> http://es6.ruanyifeng.com/#docs/module

# 4.Modules 模块化

-  http://vuefe.cn/vuex/modules.html

> ### counter 模块化 demo
> https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/counter_hot.html

# 5.应用结构

-  http://vuefe.cn/vuex/structure.html

> ### ToDo demo
> https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/todomvc.html


> ### Shooping Cart demo
> https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/shopping_cart.html
610.插件

-  http://vuefe.cn/vuex/plugins.html

# 7.严格模式

-  http://vuefe.cn/vuex/strict.html


# 8.State

-  http://vuefe.cn/vuex/state.html

# 9.Getters

 - http://vuefe.cn/vuex/getters.html

# 10.Mutations

 - http://vuefe.cn/vuex/mutations.html

# 11.Actions

-  http://vuefe.cn/vuex/actions.html


# 12.表单处理

-  http://vuefe.cn/vuex/forms.html

- [vuejs2 表单相关知识点整理] (https://github.com/bhnddowinf/vuejs2-learn/blob/master/vuejs2-form.md)

# 13.测试

-  http://vuefe.cn/vuex/testing.html

# 14.热重载

-  http://vuefe.cn/vuex/hot-reload.html

# 15.API

-  http://vuefe.cn/vuex/api.html
