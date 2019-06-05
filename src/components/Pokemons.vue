<template>
  <div>
    <h2>Contrincantes</h2>
    <div id="container">
        <div class="pokemon-container" v-if="firstPokemon && secondPokemon">
          <pokemon v-bind:pokemon="firstPokemon"/>
          <pokemon v-bind:pokemon="secondPokemon"/>
        </div>
    </div>
    <md-button v-on:click="this.loadPokemons" v-if="completion">
      Nueva pelea!
    </md-button>
    <md-button v-on:click="this.fight" v-else>
      Pelear!
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
    ...mapGetters('pokemon', ['firstPokemon', 'secondPokemon', 'completion'])
  },
  methods: {
    ...mapActions('pokemon', ['loadPokemons', 'fight'])

  },
  created() {
    this.loadPokemons()
  }
};
</script>

<style scoped lang="scss">

  .pokemon-container {
    display: flex;
    justify-content: center;
  }
</style>
