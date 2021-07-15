import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export const는 외부에서 접근 가능. 그리고 import시 변수기 때문에 {중괄호}로 불러오기
export const store = new Vuex.Store({});
