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
    <modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">custom header</h3>
    </modal>
  </form>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: function () {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function (e) {
      e.preventDefault();
      if (this.newTodoItem !== "") {
        // this.$emit("이벤트 이름", 인자1, 인자2, ...)
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        console.log(1);
      }
    },
    clearInput: function () {
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
</style>