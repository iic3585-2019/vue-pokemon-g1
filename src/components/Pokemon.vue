<template>
  <md-card id="container">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ pokemon.name }}</div>
      </md-card-header-text>
    </md-card-header>
    <md-card-media md-big>
      <img v-bind:src="pokemon.sprites.front_default" v-bind:alt="pokemon.name"/>
    </md-card-media>
    {{pokemon.message}} <br/>
    HP: {{pokemon.hp}}
  </md-card>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: Object
  }
};
</script>

<style scoped lang="scss">
  #container {
    width: 15%;
    min-width: 120px;
    margin: 0 5% 15px 5%;
  }
</style>
