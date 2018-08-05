<template>
  <div id="app">
    <Map-Box ></Map-Box>
  </div>
</template>

<script>
import  MapBox  from './components/MapBox.vue';
export default {
  name: 'app',
  components: {
    MapBox,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
