<script setup>
import { ref } from "vue";
// eslint-disable-next-line
defineEmits(["closeModal", "confirmAction"]);
// eslint-disable-next-line
const props = defineProps({
  paramContent: { type: String, default: "Param info" },
  paramKey: { type: String, default: "Param info" },
});
let paramValue = ref(props.paramKey);
</script>
<template>
  <div class="modal-background">
    <div class="modal-wrapper">
      <header>
        <h3>edit: {{ props.paramContent }}</h3>
      </header>
      <div class="content">
        <input type="text" v-model="paramValue" />
      </div>
      <div class="actions">
        <button class="back-btn" @click="$emit('closeModal')">
          <p>Back</p>
        </button>
        <button class="confirm-btn" @click="$emit('confirmAction', paramValue)"><p>Confirm</p></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";
.modal-background {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.389);
  div.modal-wrapper {
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    background-color: $mainBackground;
    padding: 2rem 2rem;

    header {
      @include flex-center;
      width: 100%;
      height: 20%;
      h3 {
        font-size: 2rem;
      }
    }
    .content {
      @include flex-center;
      width: 100%;
      height: 60%;
      input {
        padding: 1rem 1.2rem;
        border: 1px solid black;
        width: 80%;
      }
      p {
        @include font-basics;
      }
    }
    .actions {
      height: 20%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 2rem;

      .confirm-btn {
        @include primary-btn;
      }

      .back-btn {
        @include secondary-btn;
      }
    }
  }
}
</style>
