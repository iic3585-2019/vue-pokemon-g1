<template>
  <div class="hello">
    <h1>Batalla</h1>
    <div class="md-layout md-gutter" v-if="firstPokemon && secondPokemon">
      <div class="md-layout-item">
        <pokemon v-bind:pokemon="firstPokemon"/>
      </div>
      <div class="md-layout-item">
        <pokemon v-bind:pokemon="secondPokemon"/>
      </div>
    </div>
    <md-button v-on:click="this.loadPokemons">
      Cargar
    </md-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pokemon from './Pokemon.vue';

export default {
  name: 'Pokemons',
  components: {
    Pokemon
  },
  computed: {
    ...mapGetters(['firstPokemon', 'secondPokemon'])
  },
  methods: {
    ...mapActions(['loadPokemons'])
  },
  created() {
    this.loadPokemons()
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
