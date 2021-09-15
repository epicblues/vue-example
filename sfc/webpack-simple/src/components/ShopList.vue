<template>
  <div>
    <h2>살 물건들</h2>
    <ul>
      <li
        :style="{ marginBottom: '4px' }"
        v-for="item in filteredBuy"
        :key="item.name"
      >
        {{ item.name }}
        <button
          @click="
            () => {
              clickBuy(item);
            }
          "
          :style="{ float: 'right' }"
        >
          구매
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["buy"],
  methods: {
    clickBuy(item) {
      this.$emit("click-buy", item);
    },
  },
  computed: {
    filteredBuy() {
      // 전달 받을 Shopping Items로부터
      // item.buy=false 인 것만 리턴
      return this.buy.filter((item) => !item.buy);
    },
  },
};
</script>

<style scoped>
</style>