<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import General from "../components/ContractGeneral.vue";
import Networks from "../components/ContractDetails.vue";

const store = useStore();
store.dispatch("getContract");
const contractId = computed(() => store.getters.contractId);
const contract = computed(() => store.getters.contract);

const tabs = {
  General,
  Networks,
};
let currentTab = ref("General");
</script>

<template>
  <main>
    <nav>
      <ul>
        <li
          v-for="(tab, key) in tabs"
          :key="tab"
          @click="currentTab = key"
          :class="{ activeTab: currentTab === key }"
        >
          <div>
            <p>{{ key }}</p>
          </div>
        </li>
      </ul>
      <div class="contract-id">
        <p>{{ contractId }}</p>
      </div>
    </nav>
    <section>
      <keep-alive>
        <component :is="tabs[currentTab]" :contract="contract"></component>
      </keep-alive>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";
main {
  background-color: $mainBackground;
  width: 80%;
  min-height: 70vh;
  margin: 0 auto;
  margin-top: 5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 1.5rem;
  overflow: hidden;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 6rem;
    width: 100%;
    background-color: $primary;

    ul {
      display: flex;
      flex-flow: row nowrap;
      height: 100%;
      list-style: none;
      li {
        background-color: $primary;
        cursor: pointer;
        div {
          @include flex-center;
          height: 100%;
          width: 8rem;

          p {
            @include font-basics;
            color: $mainBackground;
          }
        }
      }
      .activeTab {
        background-color: $mainBackground;
        p {
          color: $primary;
        }
      }
    }
    div.contract-id {
      margin-left: auto;
      margin-right: 4rem;
      p {
        @include font-basics;
        color: $mainBackground;
        font-weight: bold;
      }
    }
  }

  section {
    width: 100%;
    height: 90%;
    padding: 1rem 1.4rem;
  }
}
</style>
