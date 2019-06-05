<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <md-progress-spinner v-if="loading" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import store from './store';

export default {
  name: 'app',
  components: {
    HelloWorld
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
</style>
