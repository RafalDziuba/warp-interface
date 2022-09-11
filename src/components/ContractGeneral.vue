<script setup>
import { computed } from "vue";

// eslint-disable-next-line
const props = defineProps({
  contract: { type: Object, default: () => ({ networks: {} }) },
});
const networksLength = computed(() => {
  return Object.keys(props.contract?.networks).length;
});
</script>

<template>
  <div>
    <h3>Contract info:</h3>
    <div>
      <div>
        <p class="label">Ticker:</p>
        <p>{{ props.contract.ticker }}</p>
      </div>
      <div>
        <p class="label">Contract name:</p>
        <p>{{ props.contract.name }}</p>
      </div>
      <div>
        <p class="label">Available networks:</p>
        <p>{{ networksLength }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  h3 {
    font-size: 3rem;
  }
  div {
    .label {
        color: $primary;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        @include font-basics;
        color: #8c8c8c;
    }
  }
}
</style>
