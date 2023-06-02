<template lang="">
    <section>
      <div class="container">
        <Orders />
      </div>
    </section>
  </template>
  <script>
  import Orders from "../components/Orders/Orders.vue";
  export default {
    name: "ordersPage",
    components:{
        Orders
    }
  };
  </script>
  <style lang=""></style>