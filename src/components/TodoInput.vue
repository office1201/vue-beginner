<template>
  <form class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      v-on:keydown.enter.prevent="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <!-- 모달창 적용 -->
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i
          class="fas fa-times closeModalBtn"
          v-on:click="showModal = false"
        ></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>
    </modal>
  </form>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (this.newTodoItem !== "") {
        // this.$emit("이벤트 이름", 인자1, 인자2, ...)
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItem", this.newTodoItem); // const text = this.newTodoItem.trim()으로 text를 두 번째 인자로 줘도 가능
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
