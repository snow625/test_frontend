<template lang="">
  <header class="header">
    <ul class="container side-bar">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        class="link"
        :to="link.url"
        :exact="link.exact"
        @click="() => navigate(link.url)"
      >
        <span class="text">{{ link.title }}</span>
      </router-link>
    </ul>
  </header>
</template>
<script>
export default {
  name: "headerComponent",
  data() {
    return {
      links: [
        { title: "Shop", url: "/" },
        { title: "Shopping Cart", url: "/cart" },
        { title: "History of Orders", url: "/orders" },
      ],
    };
  },
  methods: {
    navigate(link) {
      this.$router.push(link);
    },
  },
};
</script>
<style lang="css" scoped>
.header {
  width: 100%;
  background-color: #bac8d3;
  min-height: 50px;
  display: flex;
  justify-content: center;
  
}
.side-bar {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
}
.side-bar :not(:last-child)::after{
  content: "|";
   color: gray;
   margin-left: 20px;
   font-weight: 400;
   line-height: 2;  
}

.link {
  color: grey;
  font-size: 24px;
  font-weight: 500;
}
</style>
