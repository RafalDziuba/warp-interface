<script setup>
import { computed } from "vue";
// import { useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
// eslint-disable-next-line
// const props = defineProps({
//   contract: { type: Object, default: () => ({ networks: {} }) },
// });
const network = computed(() => store.getters.currentNetwork);
// import { computed } from "vue";
// const networks = computed(() => {
//   return props.contract?.networks;
// });
// const route = useRoute();
// const logNetwork = (network) => {
//   console.log(network);
console.log(network.value);
// }
// console.log(route.params);
// console.log(props.network)
let currentNetwork = localStorage.getItem("currentNetwork");
let specificNetwork = JSON.parse(currentNetwork);
console.log(specificNetwork);
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h1>{{ specificNetwork.name }}</h1>
      <p class="info-text">{{ specificNetwork.desc }}</p>
    </div>
    <div class="contract-info">
      <div class="basic-info">
        <span class="info-span">ID:</span>
        <p class="info-text">{{ specificNetwork.id }}</p>
      </div>
      <div class="basic-info">
        <span class="info-span">Owner:</span>
        <p class="info-text">{{ specificNetwork.owner }}</p>
      </div>
      <div v-if="Object.keys(specificNetwork.connectedNodes).length > 0" class="basic-info">
        <span class="info-span">Connected nodes:</span>
        <details v-for="node in specificNetwork.connectedNodes" :key="node">
          <summary>
            <h3>{{ node.nodeId }}</h3>
            <div>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L7 7L1 1"
                  stroke="#7B8BA5"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </summary>
          <p class="list-info"><span>Address:</span> {{ node.address }}</p>
          <p class="list-info"><span>Owner:</span> {{ node.owner }}</p>
          <p class="list-info"><span>Port:</span> {{ node.port }}</p>
          <p class="list-info"><span>Url:</span> {{ node.url }}</p>
        </details>
      </div>
      <div class="basic-info">
        <span class="info-span">Consensus params:</span>
        <div class="consensus-wrapper">
          <div class="consensus-info">
            <p>
              <span>Decision threshold:</span>
              {{ specificNetwork.consensusParams.decisionThreshold }}
            </p>
          </div>
          <div class="consensus-info">
            <p>
              <span>Quorum size:</span>
              {{ specificNetwork.consensusParams.quorumSize }}
            </p>
          </div>
          <div class="consensus-info">
            <p>
              <span>Sample size:</span>
              {{ specificNetwork.consensusParams.sampleSize }}
            </p>
          </div>
        </div>
      </div>
      <div class="basic-info" v-if="specificNetwork.contractGroups.length > 0">
        <span class="info-span">Contract groups:</span>
        <p class="info-text" v-for="(group, index) in specificNetwork.contractGroups" :key="index">{{index + 1}}: {{ group }}</p>
      </div>
      <div class="basic-info" v-if="specificNetwork.contracts.length > 0">
        <span class="info-span">Contracts:</span>
        <p class="info-text" v-for="(contract, index) in specificNetwork.contracts" :key="index">{{index + 1}}: {{ group }}</p>
      </div>
    </div>
 
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";
div.wrapper {
  margin: 0 auto;
  margin-top: 8rem;
  width: 60%;
  padding: 4rem 6rem;
  background-color: $mainBackground;
  .header {
    margin-bottom: 2rem;
    h1 {
      font-size: 5rem;
    }
    p {
      @include font-basics;
    }
  }
  .basic-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.4rem;
    p.info-text,
    span {
      @include font-basics;
    }
    span.info-span {
      color: $primary;
      font-weight: bold;
    }
  }
}
details {
  width: 100%;
  border-bottom: 1px solid grey;
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
  }
}
svg {
  transition: 0.2s;
}
details[open] svg {
  transform: rotate(180deg);
  /* transition: 0.2s; */
}
summary {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: space-between;
  list-style-type: none;
  padding: 1rem 0;
}
summary::webkit-details-marker {
  display: none;
}
p.list-info {
  @include font-basics;
  span {
    color: $primary;
    margin-right: 0.3rem;
  }
}

.consensus-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  .consensus-info {
    background-color: $secondary;
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: background .2s ease;
    &:hover {
      background-color: $primary;
    }
    cursor: pointer;
    p,
    span {
      @include font-basics;
    }
  }
}
</style>
