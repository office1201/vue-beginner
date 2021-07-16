<template>
  <div id="app">
    <!-- v-bind:내려보낼 프롭스 속성이름="현재 위치의 컴포넌트 데이터 속성" -->
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <!-- <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toogleItem="toogleOneItem"
    /> -->
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

// export default에서 default는 하나의 파일에서 하나만 "export"하게 즉, 인캡슐레이션 하는 것...!
export default {
  // 리팩토링: 향상된 객체 리터럴 - data: function() {}에서 수정됨
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj)); // localStorage.setItem(this.newTodoItem, this.newTodoItem)에서 수정됨
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1); // JS 배열 메서드, 특정 index 하나 지움, 반대로 slice: 똑같이 지움, 기존 배열을 변경x, 새로운 배열 반환
    // },
    // toogleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   // 로컬스토리지에 update API가 없기 때문에, 지웠다가 갱신하는😭😭😭😭😭
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
  components: {
    // 향상된 객체 리터럴
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
