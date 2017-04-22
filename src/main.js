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
    increment: state => state.count++,
    decrement: state => state.count--
  }
});
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
