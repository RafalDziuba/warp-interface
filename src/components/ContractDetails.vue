<script setup>
import { computed } from "vue";
const networks = computed(() => {
  return props.contract?.networks;
});
// eslint-disable-next-line
const props = defineProps({
  contract: { type: Object, default: () => ({ networks: {} }) },
});
</script>

<template>
  <div>
    <details v-for="network in networks" :key="network">
      <summary>
        {{ network.id }}
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
      <p v-for="node in network.connectedNodes" :key="node">
        {{ node.nodeId }}
      </p>
    </details>
  </div>
</template>

<style lang="scss" scoped>
details {
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
  border-bottom: 1px solid grey;
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
  justify-content: space-between;
  list-style-type: none;
  padding: 2rem 0;
}
summary::webkit-details-marker {
  display: none;
}
</style>
