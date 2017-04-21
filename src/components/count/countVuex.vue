<template>
    <div class="count">
        {{count}}
        <div class="btn">
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment() {
             this.$store.commit('increment');
        },
        decrement() {
             this.$store.commit('decrement');
        }
    }
}
</script>

<style>
button {
    width: 20px;
    height: 20px;
    text-align: center;
}
</style>
