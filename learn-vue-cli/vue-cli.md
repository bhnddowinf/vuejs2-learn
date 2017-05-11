# 1. vue-cli 简介

简单介绍

[Github / vue-cli](https://github.com/vuejs/vue-cli)

[youtube / vue-cli 简介，与 套用 mint-ui demo (台湾小凡) ](https://youtu.be/AwjfG5T3vO4)

[BiliBili / vue-cli 简介，与 套用 mint-ui demo (台湾小凡)](http://www.bilibili.com/video/av6828349/)

# 2. vue.js 2 vue-cli how to start / 如何使用 vue-cli

vue.js2 vue-cli 怎么搭起来的教学, 请依序输入

    $ sudo npm install -g vue-cli

    $ vue init webpack my-project

    $ cd my-project

    $ npm install

    $ npm run dev

# 3. vue-cli 使用 Mint-UI, 入门篇

[Github / mint-UI for vuejs2 移动端 UI 库 ](http://mint-ui.github.io/docs/#!/zh-cn2) 

安装mint-ui, 指令如下：

    $ npm install mint-ui -save

.vue script

    // 本人重 vue 全家桶的讲解，怎么使用 ui库，跟此目标不符
    // 所有的 ui 库，使用原理，差不多，本示例，
    // 只讲一点点 ui 知识点，让你看个几分钟，就自已抓来用…


    // -- mint-ui start
    // http://mint-ui.github.io/docs/#!/zh-cn2/button
    // /my-project/node_modules/mint-ui/lib/button
    import mtButton from 'mint-ui/lib/button';
    import 'mint-ui/lib/button/style.css';

    // http://mint-ui.github.io/docs/#!/zh-cn2/toast
    // /my-project/node_modules/mint-ui/lib/toast
    import { Toast } from 'mint-ui';
    import 'mint-ui/lib/toast/style.css';
    // -- mint-ui end


### mint-ui 怎么用？

 [demo / mint-ui ](https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/mint_ui1.html)

 [源码 / mint_ui1.html](https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1.html)

 [源码 / mint_ui1.js](https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1.js)

 [源码 / mint_ui1v.vue](https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1v.vue)

**补充 mint_UI 点击问题修正**

- 关于事件绑定
- 在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 __.native__ 修饰符：

```js
    <my-component @click.native="handleClick">Click Me</my-component>
```

- 从易用性的角度出发，我们对 __Button__ 组件进行了处理，使它可以监听 __click__ 事件：

```js
    <mt-button @click="handleButtonClick">Click Me</mt-button>
```

- 但是对于其他组件，还是需要添加 __.native__ 修饰符。


- 来源： http://mint-ui.github.io/docs/#!/zh-cn2

# 4.多页应用

因为讲解 npm run dev , npm run build  这两种多页设置，所以会讲这么40分钟这么久。自已有经验的话，看代码来抄，比较快，真的是初学者，还是建议看完吧，没有人会讲这么细。

下例视频，内容都一样

[视频 /  vue-cli 多页应用(youtube)](https://youtu.be/J-0Vl68uKyY)

[视频 / vue-cli 多页应用(百度云)](http://pan.baidu.com/s/1pL71opX)

[视频 / vue-cli 多页应用(http://www.bilibili.com/)](http://www.bilibili.com/video/av6805317/)