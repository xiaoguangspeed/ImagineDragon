<template>
  <div id="app">
    <map-box></map-box>
  </div>
</template>

<script>
import MapBox from './components/MapBox'
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
