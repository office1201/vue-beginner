<template>
  <ul>
    <!-- v-for에서 제공하는 내장기능1: ('', index⭐️) -->
    <li
      v-for="(todoItem, index) in propsdata"
      v-bind:key="todoItem.item"
      class="shadow"
    >
      <i
        class="fas fa-check checkBtn"
        v-bind:class="{ textCompleted: todoItem.completed }"
        v-on:click="toogleComplete(todoItem, index)"
      >
      </i>
      <!-- v-bind:class에서 제공하는 강력한 내장기능2: { 참-실행됨: boolean } -->
      <span v-bind:class="{ textCompleted: todoItem.completed }">
        {{ todoItem.item }}</span
      >
      <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo: function (todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },
    toogleComplete: function (todoItem, index) {
      this.$emit("toogleItem", todoItem, index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
