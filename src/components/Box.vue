<script>
  import Hello from './Hello.vue';
  import List from './List.vue';

  export default {
    components: { Hello, List },
  };
</script>

<template>
  <div class="box">
    <img class="logo" src="../assets/logo.png">
    <hello></hello>
    <list></list>
  </div>
</template>

<style scoped>
.box {
  background-color: #f2f2f2;
  text-align: center;
  font-family: Helvetica;
}
</style>
