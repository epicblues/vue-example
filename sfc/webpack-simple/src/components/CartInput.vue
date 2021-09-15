<template>
  <form @submit.prevent="addList">
    <p>{{ message }}</p>
    <input v-model="toAdd" />
    <button>추가</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      toAdd: "",
      message: "살 물건을 입력해 주세요!",
    };
  },
  methods: {
    addList() {
      if (!this.toAdd.trim()) {
        alert("추가할 아이템 이름을 입력해 주세요!");
        console.log(event.target.children[0].focus());
        return;
      }
      this.$emit("add-list", this.toAdd);
      this.toAdd = "";
    },
  },
  watch: {
    // 데이터 감시
    toAdd(item) {
      // toAdd data 감시
      console.log(item);
      if (item.trim().length > 0) {
        this.message = "목록 제출 가능합니다.";
      } else {
        this.message = "살 물건을 입력해 주세요!";
      }
    },
  },
};
</script>

<style>
</style>