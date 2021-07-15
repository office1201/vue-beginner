<template>
  <div id="app">
    <!-- v-bind:내려보낼 프롭스 속성이름="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoHeader />
    <TodoInput />
    <TodoList v-bind:propsdata="todoItems" />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data: function () {
    return {
      todoItems: [],
    };
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

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  widows: 200px;
}
button {
  border-style: groove;
}
i {
  cursor: pointer;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
