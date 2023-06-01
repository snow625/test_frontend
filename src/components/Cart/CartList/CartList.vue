<template lang="">
  <ul class="list">
    <Item
      :onRemove="onRemove"
      v-for="(item, index) in items"
      :key="item._id"
      :itemData="item"
      v-model="items[index].quantity"
    />
  </ul>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "CartList",

  components: { Item },
  props: {
    modelValue: Number,
    items: {
      type: Array,
      default: () => [],
    },
    onRemove: {
      type: Function,
      default: () => {},
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      values: {},
    };
  },
};
</script>
<style lang="css" scoped>
.list {
  padding: 10px;
  overflow: auto;
  border: 2px solid var(--el-color-primary);
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 30px 20px;
  width: 100%;
}
</style>
