import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [{
        id: 1,
        text: 'do it',
        done: true
      },
      {
        id: 2,
        text: 'dont do it',
        done: false
      },
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    // 变更状态
    increment: state => state.count++,
    decrement: state => state.count--,
    testPayload(state, n) {
      state.count += n
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
    // store.dispatch 可以处理被触发的action的回调函数返回的Promise，并且store.dispatch仍旧返回Promise
    decrementAsync({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('decrement');
          resolve();
        },1000)
      })
    },

  }
});
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
