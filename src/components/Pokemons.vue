<template>
  <div>
    <h2>Batalla</h2>
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
    <md-button v-on:click="this.fight">
      Pelea!
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
    ...mapActions(['loadPokemons', 'fight'])
  },
  created() {
    this.loadPokemons()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
