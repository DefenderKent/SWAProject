<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/reset.scss";
  html {
    font-size: 10px;    
  }

  #app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  @media only screen and (min-width: 1500px) {
    html {
      font-size: 8px;
    }
  }
</style>
