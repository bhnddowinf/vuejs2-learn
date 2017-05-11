

# v-model 特性如下： (1)

- v-model 并不关心表单控件初始化所生成的值。因为它会选择 Vue 实例数据来作为具体的值。
- v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。
- 严格模式下的Vuex，在属于 Vuex 的 state （状态）上使用 v-model时会比较棘手(就是 vuex 不爱 v-model)


# 文本 (2)
## VUEX

```js
    <input :value="message" @input="updateMessage">

    // .... 组件中
    computed: {
        ...mapState({
            message:  {
                get () {
                    return this.$store.state.obj.message
                },
                set (value) {
                    this.$store.commit('updateMessage', value)
                }
            }
        })
    },
    methods: {
      updateMessage (e) {
        this.$store.commit('updateMessage', e.target.value)
      }
    }
    在这里使用 mutation handler(变更句柄):

    // .... vuex mutations 中
    mutations: {
      updateMessage (state, message) {
        state.obj.message = message
      }
    }
```

## 不用 vuex

```js
    <input v-model="dom" placeholder="edit me">
    <p>Message is: {{ dom }}</p>
```

### 修饰符 .lazy
- 在默认情况下， v-model 在 input 事件中同步输入框的值与数据
- 但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：

```js
    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="msg" >
```

### 修饰符 .number
-    如果想自动将用户的输入值转为 Number 类型
-    （如果原值的转换结果为 NaN 则返回原值）
-    可以添加一个修饰符 number 给 v-model 来处理输入值：

```js
    <input v-model.number="age" type="number">
```

- 这通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。

### 修饰符 .trim

- 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：

```js
    <input v-model.trim="msg">
```


# 多行文本 (3)

- 在文本区域插值( <textarea></textarea> ) 并不会生效，应用 v-model 来代替

```js
<span>Multiline message is:</span>
<p style="white-space: pre">{{ dom }}</p>
<br>
<textarea v-model="dom" placeholder="add multiple lines"></textarea>
```


# 单勾框 (4)

```js
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

- 特别：
- 但是有时我们想绑定 value 到 Vue 实例的一个动态属性上
- 这时可以用 v-bind 实现
- v-bind:value="vue data value"
- 并且这个属性的值可以不是字符串。

```js
<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">
```


# 多勾框 (5)
## data，要有 数组 []

```js
<input type="checkbox" id="jack" value="Jack" v-model="dom">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="dom">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="dom">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ dom }}</span>


new Vue({
  el: '...',
  data: {
    dom: []
  }
})
```

- 特别：
- 但是有时我们想绑定 value 到 Vue 实例的一个动态属性上
- 这时可以用 v-bind 实现
- v-bind:value="vue data value"
- 并且这个属性的值可以不是字符串。

```js

<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b">
// 当选中时
vm.toggle === vm.a
// 当没有选中时
vm.toggle === vm.b

```


# 单选框 (6)

```js
<input type="radio" id="one" value="One" v-model="dom">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="dom">
<label for="two">Two</label>
<br>
<span>dom: {{ dom }}</span>
```


- 特别：
- 对于单选按钮，勾选框及选择列表选项
- v-model 绑定的 value 通常是静态字符串（对于勾选框是逻辑值）：
- 但是有时我们想绑定 value 到 Vue 实例的一个动态属性上
- 这时可以用 v-bind 实现
- v-bind:value="vue data value"
- 并且这个属性的值可以不是字符串。

```js
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<input type="radio" v-model="pick" v-bind:value="a">
// 当选中时
vm.pick === vm.a
```js











# 单选列表(7)

```js
<select v-model="dom">
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>dom: {{ dom }}</span>
```

- 特别：
- 但是有时我们想绑定 value 到 Vue 实例的一个动态属性上
- 这时可以用 v-bind 实现
- v-bind:value="vue data value"
- 并且这个属性的值可以不是字符串。

```js
<!-- 当选中时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

---------------------------

<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
// 当选中时
typeof vm.selected // -> 'object'
vm.selected.number // -> 123




# 多选列表(8)
## data （绑定到一个数组）

```js

<select v-model="dom">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>dom: {{ dom }}</span>


new Vue({
  el: '...',
  data: {
    dom: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})

```

# 日期 vue-flatpickr (9)：

## https://github.com/jrainlau/vue-flatpickr
    npm install vue-flatpickr

## .vue script    

```js
    <script>
    //----- Flatpickr start
    //import Flatpickr from '../../node_modules/vue-flatpickr/vue-flatpickr-default.vue'
    import Flatpickr from 'vue-flatpickr/vue-flatpickr-default.vue'
    //import 'vue-flatpickr/assets/flatpickr.material_blue.min.css';
    import 'vue-flatpickr/assets/flatpickr.material_orange.min.css';
    //----- Flatpickr end
    export default {
        components: {
            'mtFullname': Field,
            'Flatpickr':Flatpickr
        },
        data() {
            return {
                message: '台湾小凡喜欢  Vue!感谢 vuejs qq群: 364912432',
                selected: 1,
                flatpickr_message:'点这',
                flatpickr_options:true
            }
        }
    }
    </script>
```

## .vue template

```js
    <template>
        <div class="row">
            <span>日期：</span>
            <Flatpickr  :flatpickr_message='flatpickr_message' :flatpickr_options='flatpickr_options' />
        </div>    
    </template>
```

## Data binding

```js
    The <Flatpickr /> tag could be use as a normal <input> tag
    your root component could use v-on:update='your_methods' to receive the data comes from <Flatpickr />.

    <!-- template -->
    <Flatpickr @update='update'/>

    <!-- script -->
    data () {
        return {
          msg: 'Click here to pick a date.'
        }
      },
    methods: {
        update (val) {
          this.msg = val
        }
      }
```      