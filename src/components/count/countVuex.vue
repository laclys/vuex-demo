<template>
    <div class="count">
        {{count}}
        <div class="btn">
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>
        <p>getter：</p>
        <div>{{todo}}</div>个数：<i>{{todoCount}}</i>
        <p>PAYLOAD：</p>
        <button @click="testPayload">加上10</button>
        <p>异步（分发Action）:一秒后执行+</p>
        <button @click="incrementAsync">+</button>
        <button @click="decrementAsync">-</button>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        todo() {
            return this.$store.getters.doneTodos;
        },
        todoCount() {
            return this.$store.getters.doneTodosCount;
        }
    },
    // computed: mapState({
    //     // 箭头函数可使代码更简练
    //     count: state => state.count,

    //     // 传字符串参数 'count' 等同于 `state => state.count`
    //     countAlias: 'count',

    //     // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    //     countPlusLocalState(state) {
    //         return state.count + this.localCount
    //     }
    // }),
    // },
    methods: {
        increment() {
            this.$store.commit('increment');
        },
        decrement() {
            this.$store.commit('decrement');
        },
        testPayload() {
            this.$store.commit('testPayload', 10);
        },
        incrementAsync() {
            this.$store.dispatch('incrementAsync');
        },
        decrementAsync() {
            this.$store.dispatch('decrementAsync').then(() => {
                // 执行完decrementAsync,之后执行：
                console.log('decrementAsync执行完了');
            });
        }
    }
}
</script>

<style>
button {
    height: 20px;
    width: 70px;
    line-height: 20px;
    text-align: center;
}
</style>
