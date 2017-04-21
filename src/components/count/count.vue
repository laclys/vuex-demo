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
    data() {
        return {
            count: 0
        };
    },
    // actions
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }
}
</script>

<style>
button{
    width: 20px;
    height: 20px;
    text-align: center;
}
</style>
