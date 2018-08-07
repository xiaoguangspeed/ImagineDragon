<template>
    <div>
        <h2>选课系统可视化</h2>
        <div id="mapbox"></div>

    </div>
</template>
<script>
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    require('mapbox-gl/dist/mapbox-gl.css');
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2FzaXNjcmFmdCIsImEiOiJjamtlcWd5bG8wMHFjM3BzNjJxMG16eDI4In0.PZbJX2SC0TpOIXUTR1mGjg';
  
export default {
    name:"MapBox",
    mounted(){
        var map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v10'
        });  
    }
}
</script>
<style scoped>

</style>
