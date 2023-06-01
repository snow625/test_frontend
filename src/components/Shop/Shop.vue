<template lang="">
  <div v-loading="loading" class="wrapper">
    <ShopBar
      :selectedShop="selectedShop"
      :onSelect="onSelectShop"
      :shopList="data.shops"
    />
    <ProductsList
      :items="
        data.items?.filter((el) => el.shop_id === selectedShop).length > 0
          ? data.items.filter((el) => el.shop_id === selectedShop)
          : data.items
      "
      :cartsLS="LS"
      :onAddToCart="onAddToCart"
    />
  </div>
</template>
<script>
import ProductsList from "./ProductsList/ProductsList.vue";
import ShopBar from "./ShopBar/ShopBar.vue";
import { getBurgers } from '../../services';

export default {
  name: "shop",
  components: { ProductsList, ShopBar },
  data() {
    return {
      data: {shops:[], items:[]},
      selectedShop: "All",
      LS: [],
      data:{},
      loading:false
    };
  },
  methods: {
    onSelectShop(id) {
      this.selectedShop = id;
    },
    onAddToCart(item) {
      const items = localStorage.getItem("items");
      if (items?.length > 0) {
        const newItems = [...JSON.parse(items), item];
        this.LS = newItems;
        localStorage.setItem("items", JSON.stringify(newItems));

        return;
      }
      this.LS = [item];
      localStorage.setItem("items", JSON.stringify([item]));
    },
  },
  beforeMount() {
    const items = localStorage.getItem("items");
    if (items?.length > 0) {
      this.LS = JSON.parse(items);
      return;
    }
  },
  async mounted(){
    this.loading=true;
   const result = await getBurgers();
   if(result){
    const shops=['All'];
    result.forEach(el=>{
      if(!shops.includes(el.shop_id)){
        shops.push(el.shop_id)
      }
    })
    const items = result;
    this.data= {shops, items}
   }
   this.loading=false;
  }
};
</script>
<style lang="css" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 18% 82%;
  padding: 20px 0;
}
</style>
