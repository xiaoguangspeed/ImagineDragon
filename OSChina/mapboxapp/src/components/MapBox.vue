<template>
    <div>
        <h2>选课系统可视化</h2>
        <div id="mapbox"></div>

    </div>
</template>
<script>
import L from 'leaflet';


export default {
  name: "MapBox",
  mounted() {
        var mymap = L.map("mapbox").setView([51.505, -0.09], 13);
        L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
            attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken: "pk.eyJ1Ijoib2FzaXNjcmFmdCIsImEiOiJjamtlcWd5bG8wMHFjM3BzNjJxMG16eDI4In0.PZbJX2SC0TpOIXUTR1mGjg"
        }
        ).addTo(mymap);    
  }
};
</script>
<style scoped>
</style>
