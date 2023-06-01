<template lang="">
  <div class="container wrapper">
    <h2 class="title">404 Not Found Page</h2>
    <router-link class="link" to="/">To Shop?</router-link>
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
};
</script>
<style lang="css" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  min-height: calc(100vh - 150px);
}
.title {
  font-weight: 500;
  font-size: 40px;
}
.link {
  font-weight: 400;
  text-decoration: underline;
  font-size: 35px;
}
</style>
