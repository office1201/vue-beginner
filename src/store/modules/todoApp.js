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

// state: {todoItems: storage.fetch(),}에서 수정됨
const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
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
};

export default { state, mutations, getters }; // 상위 export를 한꺼번에
