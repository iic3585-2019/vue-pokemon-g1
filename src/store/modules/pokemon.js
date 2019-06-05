const BASE_URL = 'https://pokeapi.co/api/v2/';

const randomPokemon = () => Math.floor(Math.random() * 90) + 1;

const state = {
    pokemon1: null,
    pokemon2: null,
    loading: false
};

const getters = {
    firstPokemon: state => state.pokemon1,
    secondPokemon: state => state.pokemon2
};

const actions = {
    async loadPokemons ({ commit }) {
      commit('loading');
      const pokemon1 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
      const pokemon2 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
      commit('setPokemons', { pokemon1, pokemon2 });
      commit('loaded');
    }
};

const mutations = {
    setPokemons: (state, { pokemon1, pokemon2 }) => {
      state.pokemon1 = {
        info: pokemon1
      };
      state.pokemon2 = {
        info: pokemon2
      };
    },
    loading: state => (state.loading = true),
    loaded: state => (state.loading = false)
};

export default {
    state,
    getters,
    actions,
    mutations
};