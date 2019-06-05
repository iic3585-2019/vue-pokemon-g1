<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ pokemon.info.name }}</div>
      </md-card-header-text>
      <md-card-media md-big>
        <img v-bind:src="pokemon.info.sprites.front_default" v-bind:alt="pokemon.info.name"/>
      </md-card-media>
    </md-card-header>
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
