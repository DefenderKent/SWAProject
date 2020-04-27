<template>
  <div id="app">
    <v-login></v-login>
  </div>
</template>
<script>
import vLogin from "./components/v-login";
export default {
  components: {
    vLogin
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
