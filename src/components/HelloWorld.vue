<template>
  <div class="hello">
    <h1>{{ player1.pokemons.length }}</h1>
    <div v-for="pokemon in player1.pokemons" v-bind:key="pokemon.name">
      <h3>{{ pokemon.name }}</h3>
    </div>
    <md-button v-on:click="load">Cargar</md-button>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    player1: function () {
      return store.state.player1;
    }
  },
  methods: {
    load: function () {
      console.log('loading');
      store.commit('loadPokemons');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
