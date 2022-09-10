<script setup>
import { ref } from "vue";
import General from "../components/ContractGeneral.vue";
import Networks from "../components/ContractDetails.vue";
const tabs = {
  General,
  Networks,
};
let currentTab = ref("Networks");
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
      <div></div>
    </nav>
    <section>
      <keep-alive>
        <component :is="tabs[currentTab]"></component>
      </keep-alive>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: white;
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  margin-top: 5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 15px;
  overflow: hidden;

  nav {
    height: 10%;
    width: 100%;
    background-color: #5d80b6;

    ul {
      display: flex;
      flex-flow: row nowrap;
      height: 100%;
      list-style: none;
      li {
        background-color: #5d80b6;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 5rem;
        }
      }
      .activeTab {
        background-color: white;
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
