<template>
  <transition-group name="list" tag="ul">
    <!-- v-for에서 제공하는 내장기능1: ('', index⭐️) -->
    <li
      v-for="(todoItem, index) in this.storedTodoItems"
      v-bind:key="todoItem.item"
      class="shadow"
    >
      <i
        class="fas fa-check checkBtn"
        v-bind:class="{ textCompleted: todoItem.completed }"
        v-on:click="toogleComplete({ todoItem, index })"
      >
      </i>
      <!-- v-bind:class에서 제공하는 강력한 내장기능2: { 참-실행됨: boolean } -->
      <span v-bind:class="{ textCompleted: todoItem.completed }">
        {{ todoItem.item }}</span
      >
      <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
        <i class="fas fa-trash-alt"></i>
      </span>
    </li>
  </transition-group>
</template>

<script>
// mapGetters 써보기, mapMutations 써보기
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem", // removeTodo: 'removeOneItem(todoItem, index)'와 동일, 다만 위 태그에서 전달하는 인자 수를 아래와 맞추기 위에서 위쪽에 인자를 객체 디스트럭쳐링 처리해 줌.({todoItem, index})
      toogleComplete: "toogleOneItem",
    }),
    // removeTodo(todoItem, index) {
    //   // this.$emit("removeItem", todoItem, index);
    //   // ⭐️인자를 3개 이상 넘겨주면 불편하기 때문에 객체화를 시키고 거기다가 향상된 객체 리터럴 문법을 활용해서 인자로 넘겨줌 ==> const obj = {todoItem, index}를 그냥 인자로 넘겨줄 때에는 {todoItem, index}로!
    //   this.$store.commit("removeOneItem", { todoItem, index });
    // },
    // toogleComplete(todoItem, index) {
    //   // this.$emit("toogleItem", todoItem, index);
    //   this.$store.commit("toogleOneItem", { todoItem, index });
    // },
  },
  computed: {
    // todoItems() {
    // return this.$store.getters.storedTodoItems.
    ...mapGetters(["storedTodoItems"]), // ...mapGetters({todoItems: "storedTodoItems"}),도 가능
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
