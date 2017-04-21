<template>
  <div id="app">
    <p>传统做法:</p>
    <v-count></v-count>
    <hr>
    <p>使用vuex:</p>
    <v-vuexcount></v-vuexcount>
  </div>
</template>

<script>
import count from './components/count/count';
import vuexcount from './components/count/countVuex';

export default {
  components: {
    'v-count': count,
    'v-vuexcount': vuexcount
  }
}
</script>

<style>

</style>
