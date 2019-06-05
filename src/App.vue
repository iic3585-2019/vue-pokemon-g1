<template>
  <div id="app">
    <img id="logo" alt="Pokemon logo" src="./assets/pokemon_logo.png">
    <Pokemons />
    <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue';
import store from './store';

export default {
  name: 'app',
  components: {
    Pokemons
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
