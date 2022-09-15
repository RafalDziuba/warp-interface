<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

// eslint-disable-next-line
const props = defineProps({
  contract: { type: Object, default: () => ({ networks: {} }) },
});
const networksLength = computed(() => {
  return Object.keys(props.contract?.networks).length;
});
const networks = computed(() => {
  return props.contract?.networks;
});

const changeRoute = (network) => {
  store.commit('getCurrentNetwork', network);
  router.push({ name: "network", params: network });
};
</script>

<template>
  <div class="container">
    <h3>Contract info:</h3>
    <div class="info-wrapper">
      <div class="basic-info">
        <div>
          <p class="label">Ticker:</p>
          <p>{{ props.contract.ticker }}</p>
        </div>
        <div>
          <p class="label">Contract name:</p>
          <p>{{ props.contract.name }}</p>
        </div>
      </div>

      <div class="networks-info">
        <p class="label">
          Available networks: <span>{{ networksLength }}</span>
        </p>
        <ul class="networks-list">
          <li v-for="network in networks" :key="network" @click="changeRoute(network)">
            <p>{{ network.id }}</p>
            <img src="@/assets/arrow.png" alt="arrow-icon" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";

div.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  h3 {
    font-size: 3rem;
  }
  .info-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 60%;

    .basic-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin-top: 4rem;
    }

    .networks-info {
      margin-top: 4rem;
      width: 100%;
      ul {
        list-style: none;
        li {
          @include font-basics;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          width: 100%;
          background-color: $secondary;
          padding: 0.4rem 0.8rem;
          border-radius: 5px;
          transition: background 0.2s;
          p {
            color: $mainBackground;
            font-weight: 500;
          }
          &:hover {
            background-color: $primary;
          }
        }
      }
      img {
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 1rem;
      }
    }
  }
  div {
    .label {
      color: $primary;
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 1rem; 
      span {
        font-size: 2rem;
      }
    }

    p {
      @include font-basics;
      color: $fontSecondary;
    }
  }
}
</style>
