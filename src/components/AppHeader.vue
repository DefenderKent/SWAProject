<template>
  <header class="app-header">
    <div class="app-logo">Логотип Брижы</div>
    <nav class="app-header__nav">
      <a href="#" class="app-link">Заказы</a>
      <a href="#" class="app-link">Исполнители</a>
      <a href="#" class="app-link">Посредник</a>
      <!-- <router-link to="/orders" class="app-link">Заказы</router-link>
      <router-link to="/performers" class="app-link">Исполнители</router-link>
      <router-link to="/mediator" class="app-link">Посредник</router-link> -->
    </nav>
    <!-- <button class="app-button">Войти</button> -->
    <!-- Временно создал кнопку -->
    <button class="app-button" @click="goToRegistrationPage">Регистрация</button>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    goToRegistrationPage () {
      this.$router.push('/sign_up')
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    box-sizing: border-box;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    border-bottom: 1px black solid;

    &__nav {
      max-width: 44.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center; 
    }
  }
</style>
