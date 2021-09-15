<template>
  <div id="app">
    <CartHeader class="container" />
    <ShopList
      v-if="!emptyBuy"
      :buy="items"
      v-on:click-buy="buyItem"
      class="container"
    />
    <div v-else class="container">
      <h2>살 물건이 없습니다...</h2>
    </div>
    <CartInput @add-list="addList" class="container" />
    <div class="container">
      <input type="checkbox" v-model="watchBought" />
      <label>산 물건 보기</label>
    </div>
    <BoughtList
      class="container"
      :bought="items"
      v-show="watchBought"
      @delete-list="deleteList"
      @cancel-buy="cancelBuy"
    />
    <CartFooter class="container" />
  </div>
</template>

<script>
import CartHeader from "./components/CartHeader.vue";
import ShopList from "./components/ShopList.vue";
import CartInput from "./components/CartInput.vue";
import BoughtList from "./components/BoughtList.vue";
import CartFooter from "./components/CartFooter.vue";

export default {
  name: "App",
  components: {
    CartHeader,
    ShopList,
    CartInput,
    BoughtList,
    CartFooter,
  },
  data() {
    return {
      items: [
        { name: "무", buy: false },
        { name: "배추", buy: false },
        { name: "쪽파", buy: true },
        { name: "고춧가루", buy: false },
      ],
      watchBought: false,
      dataFunction() {
        console.log(this);
      }, // This Scope가 전역 객체인 Window로 설정되어 있다.
    };
  },
  methods: {
    buyItem(item) {
      this.items = this.items.map((origin) =>
        origin.name === item.name ? { ...origin, buy: true } : origin
      );
    },
    addList(name) {
      if (this.items.find((item) => item.name === name)) {
        alert("이미 등록된 물건입니다.");
        return false;
      }
      this.items.push({ name, buy: false });
    },
    deleteList(name) {
      this.items = this.items.filter((item) => item.name !== name);
    },
    cancelBuy(name) {
      this.items = this.items.map((origin) =>
        origin.name === name ? { ...origin, buy: false } : origin
      );
    },
  },
  computed: {
    emptyBuy() {
      return this.items.filter((item) => !item.buy).length === 0;
    },
  },
};
</script>
  
<style>
.container {
  background-color: bisque;
  border: 4px gray solid;
  margin: 7px 3px;
  padding: 7px 10px;
}

input:focus {
  background-color: red;
}

li:nth-child(even) {
  background: pink;
}
li:nth-child(odd) {
  background: gray;
}
</style>
