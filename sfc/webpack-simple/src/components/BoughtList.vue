<template>
  <div>
    <h2>산 물건들</h2>
    <ul>
      <li
        :style="{ marginBottom: '4px' }"
        v-for="item in boughtItems"
        :key="item.name"
      >
        {{ item.name }}
        <button
          :style="{ float: 'right' }"
          @click="
            () => {
              deleteList(item.name);
            }
          "
        >
          삭제
        </button>
        <button
          :style="{ float: 'right' }"
          @click="
            () => {
              cancelBuy(item.name);
            }
          "
        >
          취소
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    bought: Array,
  },
  methods: {
    deleteList(name) {
      this.$emit("delete-list", name);
    },
    cancelBuy(name) {
      this.$emit("cancel-buy", name);
    },
  },
  computed: {
    boughtItems() {
      return this.bought.filter((item) => item.buy);
    },
  },
};
</script>

<style>
</style>