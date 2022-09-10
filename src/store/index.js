import { createStore } from "vuex";
import { WarpFactory } from "warp-contracts/web";

const store = createStore({
  state() {
    return {
      contract: [],
      contractId: "f4skRMstoodrRluvl4OCY-Xo50AamgxYwBCZKzw3Uvo",
    };
  },
  mutations: {
    setContract(state, payload) {
      state.contract = payload;
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
  },
});

export default store;
