<template lang="">
  <div class="shopBar">
    <h2>Shops:</h2>
    <ul class="list">
      <li v-for="shop in shopList" :key="shop">
        <el-button
          @click="() => onSelect(shop)"
          class="button"
          size="large"
          :type="selectedShop === shop ? 'primary' : 'info'"
          plain
          >{{ shop }}</el-button
        >
        <!-- <span class="item">
        {{shop}}
      </span> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ShopBar",
  props: {
    shopList: {
      type: Array,
      default: () => [],
    },
    selectedShop: {
      type: [Number, String],
    },
    onSelect: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
<style lang="css" scoped>
.shopBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  overflow: auto;
  border: 2px solid var(--el-color-primary);
  border-radius: 4px;
  height: calc(100vh - 100px);
  padding: 20px 10px;
  margin-right: 10px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.item {
  /* color: grey; */
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
}
.button{
  width: 100%;
}
</style>
