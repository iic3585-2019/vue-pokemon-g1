<template>
  <div>
    <h2>Contrincantes</h2>
    <div id="container">
      <div class="md-layout md-gutter" v-if="firstPokemon && secondPokemon">
        <div class="md-layout-item">
          <pokemon v-bind:pokemon="firstPokemon"/>
        </div>
        <div class="md-layout-item">
          <pokemon v-bind:pokemon="secondPokemon"/>
        </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // .md-layout {
  //   max-width: 100%;
  // }

  // .md-layout-item {
  //   flex: 1 1 0;
  // }

  // #container {
  //   display: flex;
  //   justify-content: center;
  // }
</style>
