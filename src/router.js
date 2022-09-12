import { createRouter, createWebHistory } from "vue-router";

const TheContract = () => import("./layouts/TheContract.vue");
const ContractDetails = () => import("./components/ContractDetails.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/contract" },
    { path: "/contract", component: TheContract },
    { path: "/network", component: ContractDetails, name: 'network', props: true },
  ],
});

export default router;
