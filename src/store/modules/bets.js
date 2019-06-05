const state = {
  balance: 1000,
  amount: 0,
  selectedPokemon: 0
};

const getters = {
  netBalance: state => state.balance,
  selPokemon: state => state.selectedPokemon,
  betAmount: state => state.amount
};

const actions = {
  resolveBet ({ commit }, winner) {
    if (winner === state.selectedPokemon) commit('changeBalance', +state.amount);
    else commit('changeBalance', -(+state.amount));
  },
  changeAmount ({ commit }, amount) {
    commit('setAmount', amount);
  },
  changeSelectedPokemon ({ commit }, selectedPokemon) {
    commit('setSelectedPokemon', selectedPokemon);
  }
};

const mutations = {
  changeBalance: (state, amount) => (state.balance += amount),
  setAmount: (state, amount) => (state.amount = amount),
  setSelectedPokemon: (state, selectedPokemon) => (state.selectedPokemon = selectedPokemon)
};

export default {
  state,
  getters,
  actions,
  mutations
};
