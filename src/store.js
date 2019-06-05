import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://pokeapi.co/api/v2/';

const randomPokemon = () => Math.floor(Math.random() * 90) + 1;

export default new Vuex.Store({
  state: {
    pokemon2: null,
    pokemon1: null,
    loading: false
  },
  mutations: {
    loadPokemons (state, { pokemon1, pokemon2 }) {
      state.pokemon1 = {
        info: pokemon1
      };
      state.pokemon2 = {
        info: pokemon2
      };
    },
    loading (state) {
      state.loading = true;
    },
    loaded (state) {
      state.loading = false;
    }
  },
  actions: {
    async loadPokemons (context) {
      context.commit('loading');
      const pokemon1 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
      const pokemon2 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
      context.commit('loadPokemons', { pokemon1, pokemon2 });
      context.commit('loaded');
    }
  }
});
