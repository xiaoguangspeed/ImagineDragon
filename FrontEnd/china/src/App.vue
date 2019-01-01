<template>
  <div id="app">
    <My-header></My-header>
      <Visual-board></Visual-board>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import VisualBoard from "./components/VisualBoard.vue";

export default {
  name: "app",
  components: {
    MyHeader,VisualBoard
  }
};
</script>

<style>
#app {
  height: 100%;
}

</style>
