<template lang="">
  <EmpyCart v-if="!LSItems.length" />
  <div v-else class="wrapper">
    <Form v-model="formData" />
    <CartList :onRemove="removeItem" :items="orderItems" />
  </div>
  <div class="operations_wrapper">
    <p>Total price <span>{{totalPrice}}$</span></p>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
<script>
import CartList from "./CartList/CartList.vue";
import Form from "./Form/Form.vue";
import EmpyCart from "./EmpyCart/EmpyCart.vue";
import { createOrder } from "../../services";

export default {
  name: "cart",
  components: {
    CartList,
    Form,
    EmpyCart,
  },
  data() {
    return {
      orderItems: [],
      totalPrice: 0,
      LSItems: [],
      formData: {
        name: "",
        email: "",
        phone: "",
        ardress: "",
      },
    };
  },

  created() {
    const items = localStorage.getItem("items");
    if (items?.length > 0) {
      const LSData = JSON.parse(items);
      this.LSItems = LSData;
      // get form Back
      const data = LSData;
      //*****

      this.orderItems = data.map((el) => {
        return { ...el, quantity: 1 };
      });
      return;
    }
  },

  methods: {
    removeItem(id) {
      this.orderItems = this.orderItems.filter((el) => el._id !== id);
      const dataForLS = this.LSItems.filter((el) => el._id !== id);
      this.LSItems = dataForLS;
      localStorage.setItem("items", JSON.stringify(dataForLS));
    },
    submitForm() {
      // Object.keys(this.formData).()
    },
  },

  watch: {
    orderItems: {
      handler(newValue) {
        const totalPrice = Object.keys(newValue).reduce((acc, key) => {
          const { quantity, price } = newValue[key];
          return acc + quantity * price;
        }, 0);
        this.totalPrice = totalPrice;
      },
      deep: true,
    },
  },
};
</script>
<style lang="css" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 20px 0;
  height: 800px;
}
.operations_wrapper{
  display: flex;
  
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
}
.operations_wrapper p{
  font-size: 24px;

}
.operations_wrapper > p> span {
  font-size: 26px;
  font-weight: 600;
  
}
</style>
