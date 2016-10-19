<template>
  <div id="app">
    点击: {{ $store.state.count }} 次数, {{ evenOrOdd }} .<br>
    <button @click="increment">+</button>
    <button @click="decrement">-</button><br>
    <button @click="incrementIfOdd">当 奇数时，才增加</button><br>
    <button @click="incrementAsync">异步增加示例，业务设计：1秒后，才会增加 1</button><br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
