import Vue from "vue";
import Cart from "./Cart.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(Cart),
});
