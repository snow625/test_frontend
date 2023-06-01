<template lang="">
  <div class="emty">
    <h2>Cart is Empty</h2>
    <el-button
      @click="
        () => {
          $router.push('/');
        }
      "
      size="large"
      type="primary"
      >Go shopping!
    </el-button>
  </div>
</template>
<script>
export default {
  name: "EmpyCart",
};
</script>
<style lang="css" scoped>
.emty {
  padding: 20px 0;
  text-align: center;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
