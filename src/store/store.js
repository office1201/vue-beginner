import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// this.todoItems에 push가 불가하기 때문에 변수를 하나 만듬(scope가 달라서)
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          arr.push(
            JSON.parse(localStorage.getItem(localStorage.key(i))) // this.todoItems.push(localStorage.key(i))에서 수정됨
          );
      }
    }
    return arr;
  },
};

// export const는 외부에서 접근 가능. 그리고 import시 변수기 때문에 {중괄호}로 불러오기
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  // getters로 TodoList 컴포넌트에 v-for="(todoItem, index) in this.$store.state.todoItems" 바꿔보기
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj)); // localStorage.setItem(this.newTodoItem, this.newTodoItem)에서 수정됨
      state.todoItems.push(obj); // this.todoItems.push(obj)에서 변경됨
    },
    removeOneItem(state, payload) {
      // removeOneItem(todoItem, index)에서 index가 obj 즉, 향상된 객체 리터럴로 전달받음. ===> payload로 명명
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1); // JS 배열 메서드, 특정 index 하나 지움, 반대로 slice: 똑같이 지움, 기존 배열을 변경x, 새로운 배열 반환
    },
    toogleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      // 로컬스토리지에 update API가 없기 때문에, 지웠다가 갱신하는😭😭😭😭😭
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
