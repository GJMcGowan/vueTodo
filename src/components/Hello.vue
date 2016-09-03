<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to my Todo app!',
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
