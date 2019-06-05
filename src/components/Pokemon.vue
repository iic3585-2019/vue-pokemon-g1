<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ pokemon.name }}</div>
      </md-card-header-text>
      <md-card-media md-big>
        <img v-bind:src="pokemon.sprites.front_default" v-bind:alt="pokemon.name"/>
      </md-card-media>
    </md-card-header>
    <p>{{pokemon.message}}</p>
    <p>HP: {{pokemon.hp}}</p>
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

</style>
