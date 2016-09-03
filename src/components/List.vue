<template>
  <div class='list'>
    <ul>
      <li v-for='todo in todos'>
        <h2>{{ todo.title }}</h2>
        <button v-on:click='removeItem($index)'>X</button>
      </li>
    </ul>
    <input label='Item' v-model='newTodo'>
    <button v-on:click='addItem'>Add Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { title: '1st Item' },
      ],
      newTodo: '',
    };
  },
  methods: {
    addItem() {
      const todo = this.newTodo.trim();
      if (todo) {
        this.todos.push({ title: todo });
        this.newTodo = '';
      }
    },
    removeItem(index) {
      this.todos.splice(index, 1);
    },
  },
};

</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
