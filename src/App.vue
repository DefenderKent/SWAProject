<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/reset.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  html {
    font-size: 10px;    
  }

  #app {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  @media only screen and (min-width: 1500px) {
    html {
      font-size: 8px;
    }
  }
</style>
