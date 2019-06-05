const state = {
    balance: 1000
};

const getters = {
    netBalance: state => state.balance
};

const actions = {
    winBet({ commit }, amount, probability) {
        commit('increaseBalance', amount/probability);
    },
    loseBet({ commit }, amount) {
        commit('decreaseBalance', amount);
    }
};

const mutations = {
    increaseBalance: (state, amount) => (state.balance += amount),
    decreaseBalance: (state, amount) => (state.balance -= amount)
};

export default {
    state,
    getters,
    actions,
    mutations
};