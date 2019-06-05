<template>
  <div class="hello">
    <h1>Batalla</h1>
    <div class="md-layout md-gutter" v-if="pokemon1 && pokemon2">
      <div class="md-layout-item">
        <pokemon v-bind:pokemon="pokemon1"/>
      </div>
      <div class="md-layout-item">
        <pokemon v-bind:pokemon="pokemon2"/>
      </div>
    </div>
    <md-button v-on:click="load">
      Cargar
    </md-button>
  </div>
</template>

<script>
import store from '../store';
import Pokemon from './Pokemon.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Pokemon
  },
  computed: {
    pokemon1: function () {
      return store.state.pokemon1;
    },
    pokemon2: function () {
      return store.state.pokemon2;
    }
  },
  methods: {
    load: function () {
      store.dispatch('loadPokemons');
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
