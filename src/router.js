import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./pages/NotFoundPage.vue";

import ShopPage from "./pages/ShopPage.vue";
import CartPage from "./pages/CartPage.vue";
import OrdersPage from "./pages/OrdersPage.vue";

const routes = [

  { path: `/`, name: "shop", component: ShopPage },
  { path: `/cart`, name: "cart", component: CartPage },
  { path: `/orders`, name: "orders", component: OrdersPage },

  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
