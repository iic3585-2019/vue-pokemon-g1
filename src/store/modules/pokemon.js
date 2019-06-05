import { getHP, getMoves, changeIndex, randomNumber, sleep, winner } from './utils';
const BASE_URL = 'https://pokeapi.co/api/v2/';

const randomPokemon = () => randomNumber(90) + 1;

const state = {
  pokemons: [],
  attacking: 0,
  defending: 1,
  loading: false,
  battleCompleted: false
};

const getters = {
  firstPokemon: state => state.pokemons[0],
  secondPokemon: state => state.pokemons[1],
  completion: state => state.battleCompleted
};

const actions = {
  async loadPokemons ({ commit }) {
    commit('loading');
    const pokemon1 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
    const pokemon2 = await fetch(BASE_URL + 'pokemon/' + randomPokemon()).then(res => res.json());
    const moves1 = await getMoves(pokemon1);
    const moves2 = await getMoves(pokemon2);
    pokemon1.moves = moves1;
    pokemon2.moves = moves2;
    commit('setPokemons', { pokemon1, pokemon2 });
    commit('loaded');
  },
  async fight ({ commit, state, dispatch }) {
    let wins = winner(state.pokemons);
    while (wins === null) {
      const attacking = state.attacking;
      const pokemon = state.pokemons[attacking];
      const attack = pokemon.moves[randomNumber(2)];

      commit('attackMessage', { attack });
      await sleep(1000);
      commit('decrementHP', { attack });
      await sleep(1000);
      commit('removeAttackMessage');
      await sleep(1000);

      wins = winner(state.pokemons);
      commit('nextTurn');
    }
    commit('completeBattle');
    dispatch('bets/resolveBet', state.pokemons.indexOf(wins), { root: true });
  }
};

const mutations = {
  setPokemons: (state, { pokemon1, pokemon2 }) => {
    state.pokemons = [
      { ...pokemon1, message: '', hp: getHP(pokemon1) },
      { ...pokemon2, message: '', hp: getHP(pokemon2) }
    ],
    state.battleCompleted = false;
  },
  nextTurn (state) {
    state.attacking = changeIndex(state.attacking);
    state.defending = changeIndex(state.defending);
  },
  attackMessage (state, { attack }) {
    const attacking = state.attacking;
    state.pokemons[attacking].message = `Move ${attack.name}, damage ${attack.power}`;
  },
  decrementHP (state, { attack }) {
    const pokemon = state.pokemons[state.defending];
    const newHP = pokemon.hp - attack.power;
    state.pokemons[state.defending].hp = newHP >= 0 ? newHP : 0;
  },
  removeAttackMessage (state) {
    state.pokemons[state.attacking].message = '';
  },
  loading: (state) => (state.loading = true),
  loaded: (state) => (state.loading = false),
  completeBattle: state => (state.battleCompleted = true)
};

export default {
  state,
  getters,
  actions,
  mutations
};
