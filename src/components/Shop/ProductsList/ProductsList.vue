<template lang="">
  <div class="innerWrapper">
    <ul class="list">
      <li class="item" v-for="item in items" :key="item._id">
        <div class="item_icon"></div>
        <p class="item_name">{{ item.name }}</p>
        <div class="price_wrapper">
          <p class="item_price">Price:{{ item.price }}</p>
          <template v-if="cartsLS.find(({_id})=>_id===item._id)">
            <el-button disabled  size="small" type="primary">Already in cart</el-button>
          </template>
          <template v-else>
            <el-button
              size="small"
              @click="() => onAddToCart(item)"
              type="primary"
            >
              Add to Cart
            </el-button>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ProductsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    onAddToCart: {
      type: Function,
      default: () => {},
    },
    cartsLS: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="css" scoped>
.innerWrapper {
  display: flex;
  border: 2px solid var(--el-color-primary);
  border-radius: 4px;
  padding: 20px 10px;
  height: calc(100vh - 100px);
  width: 100%;
}
.list {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  align-items: center;
  gap: 30px 20px;
  width: 100%;
}
.item {
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-color: #9e9e9e1c;
  overflow: hidden;
  -webkit-box-shadow: 1px 1px 45px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 45px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 45px -15px rgba(0, 0, 0, 0.75);
}
.item_icon {
  width: 100%;
  height: 180px;
  background-color: darkgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png");
}
.item_name {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
}
.price_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
