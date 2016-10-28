# 教程主旨

  vue.js 2 官网讲解

-  1.全程用 vue-cli 讲解

-  2.所有代码在 https://github.com/bhnddowinf/vuejs2-learn ，你 copy 改改，就好。

-  3.所有代码 demo 在 https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/index.html

    本人用 yarn

-  4.所有章节视频会在 Youtube, bilibili.com

- 百度云上传有所管制(锁1g，锁 影片)。

# 系列教程

## 1.vue-cli

### 1-1.vue-cli 简介

- 简单介绍

> [vuejs/vue-cli: Simple CLI for scaffolding Vue.js projects] (https://github.com/vuejs/vue-cli)

- [视频：vue-cli 简介，与 套用 mint-ui demo (youtube) ] (https://youtu.be/AwjfG5T3vO4)

- [视频：vue-cli 简介，与 套用 mint-ui demo (bilibili)] (http://www.bilibili.com/video/av6828349/)

#### vue.js 2 vue-cli how to start

vue.js2 vue-cli 怎么搭起来的教学

``` js
  sudo npm install -g vue-cli

  vue init webpack my-project

  cd my-project

  npm install

  npm run dev

```
> [mint-UI for vuejs2] (http://mint-ui.github.io/docs/#!/zh-cn2) 移动端 UI 库


#### 安装

``` js

npm install mint-ui -save

```

``` js
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

```


#### mint-ui 怎么用？（个人实测…有坑，但还是可以用）

- [mint-ui demo] (https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/mint_ui1.html)

- [源码：mint_ui1.html] (https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1.html)

- [源码：mint_ui1.js] (https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1.js)

- [源码：mint_ui1v.vue] (https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuex-demo/mint_ui1v.vue)


### 1-2.多页应用

-  因为讲解 npm run dev , npm run build  这两种多页设置，所以会讲这么40分钟这么久。自已有经验的话，看代码来抄，比较快，真的是初学者，还是建议看完吧，没有人会讲这么细。

- vuejs2 多页应用讲解https://github.com/bhnddowinf/vuejs2-learn

  使用 vue-cli 一定用到的多页应用

  教你怎么跑 npm run dev, npm run build

> [视频: vue-cli 多页应用(youtube)](https://youtu.be/J-0Vl68uKyY)

> [视频：vue-cli 多页应用(百度云)](http://pan.baidu.com/s/1pL71opX)

> [视频：vue-cli 多页应用(http://www.bilibili.com/)](http://www.bilibili.com/video/av6805317/)

## 2.Vuex

### 2-1.[vuex 台湾小凡教程文档] (https://github.com/bhnddowinf/vuejs2-learn/blob/master/vuex-learn.md)


## 3.Vue-Router

### 3-1.[vue-router 台湾小凡教程文档] (https://github.com/bhnddowinf/vuejs2-learn/blob/master/vue-router-learn.md)

# 教程目的

- 网路上有很多 VUE 综合应用的视频，但大部份的视频 ，都当你已经了解官网
  所以讲的节奏难免偏快。
  此视频，以官网为重，将官网的观念，以视频搭配代码，实际演示。
  如果官网有看不懂的地方，比对一下，视频跟代码，就会了解了。
  减少你摸索的时间。

## 4.vue.js2 demo

> treeview

- [Tree View Demo] https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/treeview.html

- [app.js] https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/treeview/app.js

- [app.vue] https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/treeview/app.vue

- [index.html] https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/treeview/index.html

- [item-template.vue] https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/treeview/item-template.vue



# vuejs 2 相关链结

- [台湾小凡 vuejs2demo] (https://bhnddowinf.github.io/bhnddowinf/vuejs2demo/index.html) 台湾小凡 vue.js2 的 demo

- [vue.js 2 官网] (http://vuejs.org) 正式 vue.js2 尤雨溪大神 官方网站

- [http://vue.sike.io vue.js 2 双语网站] (http://vue.sike.io) vue2 全家桶双语网站

- [http://vuefe.cn vue.js 2 中文网站] (http://vuefe.cn) vue2 全家桶中文网站

- [http://vuefe.cn/about/ 贡献翻译群] (http://vuefe.cn/about/) vue2 全家桶中文网站翻译群，衷心感谢，贡献心力制作

- [从 Vue1.x 迁移] (http://vuefe.cn/guide/migration.html) 怎么从 vue1 升级至 vue2，升级指南

- [从Vue Router 0.7.x迁移] (http://vuefe.cn/guide/migration-vue-router.html) vue-router 升级指南

- [vuejs/vue-cli: Simple CLI for scaffolding Vue.js projects] (https://github.com/vuejs/vue-cli) vue-cli

- [最完整 vue 資源合集] (https://github.com/vuejs/awesome-vue) awesome-vue

- [vuex 原文文档] (http://vuex.vuejs.org/en/index.html) 尤雨溪大神

- [mint-UI for vuejs2] (http://mint-ui.github.io/docs/#!/zh-cn2) 移动端 UI 库

# 國外 ajax 主流插件 (vue-resource 作者不更新了)

- https://github.com/github/fetch

- https://github.com/mzabriskie/axios

- https://github.com/naugtur/xhr



# 豪哥的QQ群

    小弟在互联网有一个爱好前端的朋友，网名：豪情，不断贡献自已的知识分享最先进的前端资讯，带领着很多人学习前端。

    小弟有幸能结交豪哥，以下是中国最专业的前端群

* vuejs 364912432
* Angularjs 238251402
* React 530415177
* Nodejs 422910907
* JAVA高级开发群 145381037
* Python技术交流 130705066
* Hybrid App交流群 498173484
* PHP技术交流群 82254462
* UI设计么么哒群 321173051
* Go语言技术交流群 336195657
* ASP.NET C#技术交流群 461614624
* 安卓IOS混合开发群 415074410

  仅供参考


#台湾小凡

![](https://github.com/bhnddowinf/vuejs2-learn/blob/master/me.jpeg?raw=true)

    目前在台湾的中小企业

    担任资讯研发部副理

    手机：0922-731455

    信箱：bhnddowinf@yahoo.com.tw

## 台湾小凡的专长：

    1.云端伺服器建置
    2.网站开发
    3.企业资源规划系统


## License

  [MIT](http://opensource.org/licenses/MIT)

## Donate

  小弟想把 vue.js 教学的视频，做的更好
  但现实上，这需要很多的时间以及家人的支持

  →→→→[请大力的鼓励作者] (https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=77E3EEHBD3N5C)

  ![](https://github.com/bhnddowinf/vuejs-learn/blob/master/03/wechat_qrcode.png)
