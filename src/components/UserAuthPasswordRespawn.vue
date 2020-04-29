<template>
  <form class="login-form" @submit.prevent="submitHandler">
    <div class="login-form__title">
      <h2 class="login-heading">Сменить пароль</h2>
    </div>

    <div class="form-control">
      <div class="loginInput mb30">
        <label for="password">Пароль</label>
        <app-input-password
          class="form-fields__input login-input"
          :class="{invalid: $v.password.$dirty && !$v.password.required}"
          v-model="password"
        ></app-input-password>
        <small v-if="($v.password.$dirty && !$v.password.required)">Введите пароль</small>
      </div>
    </div>
    <div class="form-control">
      <div class="loginInput mb30">
        <label for="repitpassword">Подтверждение пароля</label>
        <app-input-password
          class="form-fields__input login-input"
          :class="{invalid: $v.password.$dirty && !$v.password.required}"
          v-model="repitpassword"
        ></app-input-password>
        <small v-if="($v.repitpassword.$dirty && !$v.repitpassword.required)">Подтведите пароль</small>
      </div>
    </div>
    <div class="form-control">
      <div>
        <small>{{errorMessage}}</small>
      </div>

      <button type="submit" class="btn-submit">Подтвердить</button>
    </div>
  </form>
</template>

<script>
import AppInputPassword from "./AppInputPassword.vue";
import { required } from "vuelidate/lib/validators";
export default {
  name: "UserAuth",
  data: () => ({
    password: "",
    repitpassword: ""
  }),
  validations: {
    password: { required },
    repitpassword: { required }
  },
  components: { AppInputPassword },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/login");
    }
  },
  computed: {
    errorMessage() {
      return this.$store.getters.errorMessage;
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
    font-size: 35px;
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
  small {
    text-align: left;
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
.invalid {
}
.form-fields {
  display: flex;
  flex-direction: column;
  &__input {
    border: 1px solid #000000;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #000000;
  }
}
</style>
