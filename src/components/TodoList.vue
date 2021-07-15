<template>
  <ul>
    <!-- v-for에서 제공하는 내장기능1: ('', index⭐️) -->
    <li
      v-for="(todoItem, index) in todoItems"
      v-bind:key="todoItem.item"
      class="shadow"
    >
      <i
        class="fas fa-check checkBtn"
        v-bind:class="{ textCompleted: todoItem.completed }"
        v-on:click="toogleComplete(todoItem, index)"
      ></i>
      <!-- v-bind:class에서 제공하는 강력한 내장기능2: { 참-실행됨: boolean } -->
      <span v-bind:class="{ textCompleted: todoItem.completed }">{{
        todoItem.item
      }}</span>
      <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1); // JS 배열 메서드, 특정 index 하나 지움, 반대로 slice: 똑같이 지움, 기존 배열을 변경x, 새로운 배열 반환
    },
    toogleComplete: function (todoItem) {
      todoItem.completed = !todoItem.completed;
      // 로컬스토리지에 update API가 없기 때문에, 지웠다가 갱신하는😭😭😭😭😭
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem, JSON.stringify(todoItem));
    },
  },

  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i))) // this.todoItems.push(localStorage.key(i))에서 수정됨
          );
      }
    }
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