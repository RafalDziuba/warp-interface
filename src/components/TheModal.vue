<script setup>
// eslint-disable-next-line
const props = defineProps({
  title: { type: String, default: "Title" },
});
</script>
<template>
  <div>
    <header>
      <h3>{{ props.title }}</h3>
    </header>
    <slot></slot>
    <div class="actions">
        <button class="back-btn">Back</button>
        <button class="confirm-btn">Confirm</button>
    </div>
  </div>
</template>
