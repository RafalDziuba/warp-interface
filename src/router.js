import { createRouter, createWebHistory } from "vue-router";

const TheContract = () => import("./layouts/TheContract.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/contract" },
    { path: "/contract", component: TheContract },
  ],
});

export default router;
