import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/contract" },
    { path: "/contract", component: () => import("./layouts/TheContract.vue") },
    { path: "/network", component: () => import("./layouts/ContractDetails.vue"), name: 'network', props: true },
  ],
});

export default router;
