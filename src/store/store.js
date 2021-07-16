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
});
