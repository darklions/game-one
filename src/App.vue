<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
  }
</style>
