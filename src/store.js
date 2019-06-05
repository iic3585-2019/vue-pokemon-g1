import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://pokeapi.co/api/v2/';

const POKEMONS = ['ditto', 'pikachu', 'squirtle'];

const randomPokemon = () => POKEMONS[Math.floor(Math.random() * POKEMONS.length)]

export default new Vuex.Store({
  state: {
    pokemon2: null,
    pokemon1: null,
    loading: false
  },
  mutations: {
    async loadPokemons (state) {
      console.log('loading');
      state.loading = true;
      const pokemon1 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
      const pokemon2 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
      state.pokemon1 = {
        info: pokemon1
      };
      state.pokemon2 = {
        info: pokemon2
      };
      state.loading = false;
      console.log('loaded');
    }
  },
  actions: {

  }
});
