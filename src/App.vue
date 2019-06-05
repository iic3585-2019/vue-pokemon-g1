<template>
  <div id="app">
    <img id="logo" alt="Pokemon logo" src="./assets/pokemon_logo.png">
    <h1>Bets</h1>
    <Pokemons />
    <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
    <Bet />
  </div>
</template>

<script>
import Pokemons from './components/Pokemons';
import Bet from './components/Bet';
import store from './store';

export default {
  name: 'app',
  components: {
    Pokemons,
    Bet
  },
  computed: {
    loading: function () {
      return store.state.loading;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img#logo {
  max-width: 40%;
}
</style>
