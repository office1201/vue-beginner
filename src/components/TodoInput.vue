<template>
  <form action="">
    <input type="text" v-model="newTodoItem" v-on:keyup:enter="addTodo" />
    <button v-on:click="addTodo">추가</button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function (e) {
      e.preventDefault();
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
</style>