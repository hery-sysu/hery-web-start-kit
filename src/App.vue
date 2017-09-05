<template>
  <div id="app">
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body, html {
    width: 100%;
    height: 100%;
  }
  #app {
    width: inherit;
    height: inherit;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter, .fade-leave {
    opacity: 1;
  }
</style>
