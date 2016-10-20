import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ----翻译限制：
//    小凡 (state ，小凡不翻译，这样子大脑才会有逻辑，
//    用「状态」「状态」来翻，中文的理解是卡死的
//    而且 state 一会用在参数，一会用在抽象的专有名词
//    这个词，是同名多义，用中文翻，有坑)
//
// root state object.
// 小凡( 根 state 物件)
// each Vuex instance is just a single state tree.
// 小凡 (每个 Vuex实例是单独的 state 树)
const state = {
    count: 0
  }
  //  ----翻译限制：
  //   小凡 (mutations (复数名词)，中文是突变，这个字硬翻也是坑)
  //   小凡 (mutates (动词)，中文是突变，这个字硬翻也是坑)
  //   此两者硬翻，反而大脑又卡死了，请自已记忆下来
  //
  // mutations are operations that actually mutates the state.
  // 小凡 (当执行程序时 state 突然发生变化之行为，称为 mutations)
  // each mutation handler gets the entire state tree as the first argument
  // 小凡 (每一个 mutation管理者，第一个参数为 完整的state 树)
  //, followed by additional payload arguments.
  // 小凡 (其次是附加的装载参数)
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  // 小凡 (mutations 须是同步的，并且可以通过插件或调试目的记录)
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}


//  ----翻译限制：
// 小凡(actions 是复数名词，不翻，中文为行动，这有一字多义的问题)
//
// actions are functions that causes side effects and can involve
// asynchronous operations.
// 小凡( actions 引起副作用和异步操作函数)
// 小凡( action 不改变状态，只提交(commit) mutation。)
// 小凡( action 可以包含任意异步操作。)
const actions = {
  increment: ({
    commit
  }) => commit('increment'),
  decrement: ({
    commit
  }) => commit('decrement'),
  incrementIfOdd({
    commit,
    state
  }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({
    commit
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

//  ----翻译限制：
// 小凡(getters 是复数名词，不翻，中文为行动，这有一字多义的问题)
//
// getters are functions
// 小凡(请当做 计算属性来写，所有的 getter, 接收 完整的state树，做第一个参数)
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
// 小凡 (Vuex 实例依  state, mutations, actions,and getters 组合)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
