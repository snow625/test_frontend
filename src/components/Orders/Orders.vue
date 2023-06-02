<template lang="">
  <div class="mainWrapper" v-loading="loading">
    <div v-if="orders.length === 0 && !loading" class="empty">
      <h2>You haven't ordered yet</h2>
      <el-button @click="onNewOrderClick" size="large" type="primary"
        >new Order
      </el-button>
    </div>
    <div v-else-if="orders.length !== 0 && !loading">
      <h2>Demo History orders</h2>
      <p>{{ `orders : ${orders.length}` }}</p>
    </div>
  </div>
</template>
<script>
import { getOrders } from "../../services";
export default {
  name: "orders",
  data() {
    return {
      loading: false,
      orders: [],
    };
  },
  methods: {
    onNewOrderClick() {
      const items = localStorage.getItem("items");
      if (items) {
        JSON.parse(items).length > 0 && this.$router.push("/cart");
        return;
      }
      this.$router.push("/");
    },
  },
  async beforeMount() {
    this.loading = true;
    const data = await getOrders();
    if (data?.length) {
      this.orders = data;
    }
    this.loading = false;
  },
};
</script>
<style lang="css" scoped>
.mainWrapper {
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.empty {
  gap: 40px;
  display: flex;
}
</style>
