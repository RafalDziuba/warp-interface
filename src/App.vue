<script setup>
// import TheContract from "./layouts/TheContract.vue";
// import {  onMounted } from "vue";
// import { useStore } from "vuex";
// import { computed } from "vue";

// const store = useStore();
// store.dispatch("getContract");
// const contract = computed(() => store.getters.contract);
// console.log(contract.value)

</script>

<template>
  <router-view></router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Barlow", sans-serif;
  font-size: 10px;
}

body {
  background-color: #f7f8f9;
}
</style>
