<template>
  <div id="app">
  </div>
</template>

<script>
  export default {
    name: 'advertisement',
    created() {
      console.log(this.changePeople);
    },
    computed: {
      changePeople() {
        return this.$store.getters.changePeople
      }
    }
  }

</script>

<style>


</style>
