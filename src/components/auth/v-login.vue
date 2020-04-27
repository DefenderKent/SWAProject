<template>
  <form class="login-form" @submit.prevent="submitHandler">
    <div class="login-form__title">
      <h2 class="login-heading">Войти</h2>
      <a href="#">Регистрация</a>
    </div>

    <div class="form-control">
      <div class="loginInput mb70">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="username" class="login-input" />
      </div>
    </div>

    <div class="form-control">
      <div class="loginInput mb30">
        <label for="password">Пароль</label>
        <input type="password" name="password" id="password" class="login-input" />
      </div>
    </div>
    <div class="form-control">
      <div class="removepassword">
        <router-link :to="{name:'removepassword'}">Забыли пароль?</router-link>
        <!-- <a href="#">Забыли пароль?</a> -->
      </div>
    </div>

    <div class="form-control">
      <button type="submit" class="btn-submit">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "v-login",
  components: {},
  methods: {
    submitHandler() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");
.login-form {
  max-width: 780px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.36);
  box-sizing: border-box;
  padding: 65px 137px 94px 137px;
  font-family: Roboto;
  color: #000000;
  h2 {
    margin: 0;
    text-align: left;

    font-style: normal;
    font-weight: normal;
    font-size: 54px;
    line-height: 63px;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
    a {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;

      color: #000000;
    }
  }
}

.loginInput {
  display: flex;
  flex-direction: column;
  label {
    text-align: left;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
  }
}
.login-input {
  width: 100%;
  margin: 0 auto;
  height: 48px;

  font-size: 24px;
  padding-left: 15px;
}
.mb70 {
  margin-bottom: 70px;
}
.removepassword {
  text-align: right;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
}
.mb30 {
  margin-bottom: 30px;
}
.btn-submit {
  background: none;
  border: 0;
  border: 2px solid #000000;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  padding: 12px 87px;
  color: #000000;
  margin-top: 50px;
}
</style>
