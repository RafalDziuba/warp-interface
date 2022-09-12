import { createStore } from "vuex";
import { WarpFactory } from "warp-contracts/web";

const store = createStore({
  state() {
    return {
      contract: [],
      contractId: "f4skRMstoodrRluvl4OCY-Xo50AamgxYwBCZKzw3Uvo",
      currentNetwork: null,
    };
  },
  mutations: {
    setContract(state, payload) {
      state.contract = payload;
    },
    getCurrentNetwork(state, payload) {
      state.currentNetwork = payload;
      localStorage.setItem('currentNetwork', JSON.stringify(payload));
    },
  },
  actions: {
    async getContract({ commit, state }) {
      const warp = WarpFactory.forMainnet();
      const contract = warp.contract(state.contractId);
      const { cachedValue } = await contract.readState();
      commit("setContract", cachedValue.state);
    },
  },
  getters: {
    contract(state) {
      return state.contract;
    },
    contractId(state) {
      return state.contractId;
    },
    currentNetwork(state) {
      return state.currentNetwork;
    },
  },
});

export default store;
