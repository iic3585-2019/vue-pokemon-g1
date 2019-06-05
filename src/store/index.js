import Vue from 'vue';
import Vuex from 'vuex';
import pokemon from './modules/pokemon';
import bets from './modules/bets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon: {
      ...pokemon,
      namespaced: true
    },
    bets : {
      ...bets,
      namespaced: true
    }
  }
});
