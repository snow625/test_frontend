<template lang="">
  <Header />
  <main>
    <router-view />
  </main>
</template>
<script>
import Header from "./components/Header/Header.vue";

export default {
  components: { Header },
};
</script>
<style lang="css" scoped></style>
