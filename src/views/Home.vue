<template>
  <div class="home">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
