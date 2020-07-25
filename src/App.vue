<template>
  <div id="app">
    <NamePlate />
  </div>
</template>

<script>
import NamePlate from './components/NamePlate.vue';

export default {
  name: 'App',
  components: {
    NamePlate
  }
}
</script>

<style>
#app {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
