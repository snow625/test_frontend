<template lang="">
  <li class="item">
    <div class="item_icon"></div>
    <div class="price_wrapper">
      <p class="item_name">{{ itemData.name }}</p>
      <p class="item_price">Price:{{ itemData.price }}</p>
      <div class="operation">
        <el-input-number
          v-model="num"
          :min="1"
          :max="10"
          @change="updateInput"
          size="small"
        />
        <el-button
          @click="
            () => {
              onRemove(itemData._id);
            }
          "
          type="danger"
          :icon="icons.Delete"
          circle
        />
      </div>
    </div>

    <!-- <template v-if="cartsLS.find(({_id})=>_id===item._id)">
            <el-button disabled  size="small" type="primary">Already in cart</el-button>
          </template> -->
    <!-- <template v-else>
            <el-button
              size="small"
              @click="() => onAddToCart(item)"
              type="primary"
            >
              Add to Cart
            </el-button>
          </template> -->
  </li>
</template>
<script>
import { Delete } from "@element-plus/icons-vue";
export default {
  name: "cartItem",
  emits: ['update:modelValue'],
  props: {
    modelValue:Number,
    itemData: {
      type: Object,
    },
    onRemove: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      num: this.modelValue,
    };
  },
  methods: {
    updateInput(value) {
      this.$emit("update:modelValue", value);
        this.num=value
    },
  },
  
  setup() {
    const icons = {
      Delete,
    };

    return {
      icons,
    };
  },
};
</script>
<style lang="css" scoped>
.item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 180px;
  border-radius: 5px;
  background-color: #9e9e9e1c;
  /* overflow: hidden; */
  -webkit-box-shadow: 1px 1px 45px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 45px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 45px -15px rgba(0, 0, 0, 0.75);
}
.item_icon {
  width: 160px;
  height: 160px;
  border-radius: 5px;
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
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-left: 10px;
  width: 200px;
}
.operation {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
