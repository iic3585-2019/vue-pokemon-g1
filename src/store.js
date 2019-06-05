import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://pokeapi.co/api/v2/';

export default new Vuex.Store({
  state: {
    player1: {
      name: 'Thomas',
      pokemons: []
    },
    player2: {
      name: 'FloV',
      pokemons: []
    }
  },
  mutations: {
    async loadPokemons (state) {
      const ditto = await fetch(BASE_URL + 'pokemon/ditto').then(res => res.json());
      state.player1.pokemons.push(ditto);
      state.player2.pokemons.push({ ...ditto });
    }
  },
  actions: {

  }
});
