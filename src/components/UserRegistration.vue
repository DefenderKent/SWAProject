<template>
  <div class="form-wrapper">
    <form class="registr-form" @submit.prevent="onSubmit">
      <h2 class="registr-form__title">Регистрация</h2>
      <div class="form-control">
        <label class="form-fields">
          <span>Email</span>
          <input 
            type="email"
            class="form-fields__input"
            :class="{invalid: $v.email.$dirty && !$v.email.required}"
            @blur="onCheckUniqueEmail"
            v-model.trim="email"
          />
        </label>
        <small 
          v-if="($v.email.$dirty && !$v.email.required) || (!$v.email.email)"
          class="err-message"
        >
          Введите действительный e-mail
        </small>
        <small 
          v-else-if="uniqueEmail"
          class="err-message"
        >
          Данный email уже занят
        </small>
      </div>
      <div class="form-control">
        <label class="form-fields">
          <span>Логин</span>
          <input 
            type="text"
            class="form-fields__input"
            :class="{invalid: $v.login.$dirty && !$v.login.required}"
            @blur="onCheckUniqueLogin"
            v-model.trim="login"
          />
        </label>
        <small 
          v-if="$v.login.$dirty && !$v.login.required"
          class="err-message"
        >
          Введите логин
        </small>
        <small 
          v-else-if="!$v.login.minLength || !$v.login.maxLength"
          class="err-message"
        >
          Логин должен содержать не менее {{$v.login.$params.minLength.min}} 
          и не более {{$v.login.$params.maxLength.max}} символов.
          Сейчас логин состоит из {{$v.login.$model.length}} символов.
        </small>
        <small 
          v-else-if="uniqueLogin"
          class="err-message"
        >
          Данный логин уже занят
        </small>
      </div>
      <div class="form-control">
        <label class="form-fields">
          <span>Пароль</span>
          <app-input-password 
            class="form-fields__input"
            :class="{invalid: $v.password.$dirty && !$v.password.required}"
            v-model="password"
          >
          </app-input-password>
          <!-- <input 
            type="password"
            class="form-fields__input"
            v-model="password"
          /> -->
        </label>
        <small 
          v-if="$v.password.$dirty && !$v.password.required"
          class="err-message"
        >
          Введите пароль
        </small>
        <small 
          v-else-if="!$v.password.minLength || !$v.password.maxLength"
          class="err-message"
        >
          Пароль должен содержать не менее {{$v.password.$params.minLength.min}} 
          и не более {{$v.password.$params.maxLength.max}} символов.
          Сейчас пароль состоит из {{$v.password.$model.length}} символов.
        </small>
      </div>
      <div class="form-control">
        <label class="form-fields">
          <span>Подтверждение пароля</span>
          <app-input-password 
            class="form-fields__input"
            :class="{invalid: $v.repeatPassword.$dirty && !$v.repeatPassword.required}"
            v-model="repeatPassword"
          >
          </app-input-password>
          <!-- <input 
            type="password"
            class="form-fields__input"
            v-model="repeatPassword"
          /> -->
        </label>
        <small 
          v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.required"
          class="err-message"
        >
          Введите пароль еще раз
        </small>
        <small 
          v-else-if="!$v.repeatPassword.minLength || !$v.repeatPassword.maxLength"
          class="err-message"
        >
          Пароль должен содержать не менее {{$v.password.$params.minLength.min}} 
          и не более {{$v.password.$params.maxLength.max}} символов.
          Сейчас пароль состоит из {{$v.repeatPassword.$model.length}} символов.
        </small>
        <small 
          v-else-if="!$v.repeatPassword.sameAsPassword"
          class="err-message"
        >
          Пароли не совпадают
        </small>
      </div>
      <div class="form-control">
        <label class="form-fields">
          <span>Выберите роль</span>
          <select 
            name="select-role" 
            class="form-fields__input select-role" 
            :class="{invalid: $v.selected.$dirty && !$v.selected.required}"
            v-model="selected"
          >
            <option disabled value="">Выберите один из вариантов</option>
            <option value="Заказчик">Заказчик</option>
            <option value="Исполнитель">Исполнитель</option>
            <option value="Посредник">Посредник</option>
          </select>
        </label>
        <small 
          v-if="$v.selected.$dirty && !$v.selected.required"
          class="err-message"
        >
          Выберите вашу роль в системе
        </small>
      </div>
      <div class="agreement">
        <input 
          type="checkbox" 
          id="agreement-checkbox" 
          class="agreement-checkbox"
          v-model='agreement'
        />
        <label for="agreement-checkbox" class="agreement-text">Подтверждаю согласие на обработку <a href="#">ПнД</a></label>
      </div>
      <button type="submit" class="btn" :disabled="!agreement">Подтвердить</button>
    </form>
  </div>
</template>

<script>
import { required, minLength, maxLength, sameAs, email } from 'vuelidate/lib/validators'
import AppInputPassword from './AppInputPassword.vue'

export default {
  name:  'UserRegistration',
  components: {
    AppInputPassword
  },
  validations: {
    email: {
      required,
      email
    },
    login: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(55)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16),
      sameAsPassword: sameAs('password')
    },
    selected: {
      required
    }
  },
  data() {
    return {
      email: '',
      login: '',
      password: '',
      repeatPassword: '',
      selected: '',
      agreement: false
    }
  },
  computed: {
    uniqueEmail() {
      return !this.$store.getters.uniqueEmail
    },
    uniqueLogin() {
      return !this.$store.getters.uniqueLogin
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      if (this.uniqueLogin || this.uniqueEmail) { 
        this.$v.$touch()
        return
      }

      this.$store.dispatch('USER_REGISTRATION', this.$data)
        .then(() => {
          //здесь еще нужно будет проверять статус запроса, по идее...
          this.$router.push('/letter-sent')
        })
        .catch(err => {
          console.log(err)
          alert(err)
        })
    },
    onCheckUniqueEmail() {
      //срабаотывает при расфокусировке инпута
      //но по хорошему, думаю стоит использовать debounce или throttling или что-то такое
      this.$store.dispatch('CHECK_UNIQUE_EMAIL', this.$data.email)
    },
    onCheckUniqueLogin() {
      //срабаотывает при расфокусировке инпута
      //но по хорошему, думаю стоит использовать debounce или throttling или что-то такое
      this.$store.dispatch('CHECK_UNIQUE_LOGIN', this.$data.login)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-wrapper {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 8rem 0;
  }

  .registr-form {
    box-sizing: border-box;
    width: 70rem;
    // height: 103.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    background: #FFFFFF;
    border: 2px solid rgba(0, 0, 0, 0.36);
    padding: 3rem 9.6rem;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #000000;

    &__title {
      font-size: 5.4rem;
      line-height: 6.3rem;
      align-self: flex-start;
      margin-bottom: 5.9rem;
    }
  }

  .form-control {
    max-width: 50.7rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    small {
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
  }

  .form-fields {
    display: flex;
    flex-direction: column;

    &__input {
      height: 5.2rem;
      padding: 0 1rem;
      border: 1px solid #000000;
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: #000000;
    }
  }

  .invalid {
    border-color: red;
  }

  .err-message {
    color: red;
  }

  .select-role {
    cursor: pointer;
  }

  .agreement {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2.9rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  .btn {
    width: 23.9rem;
    height: 5.1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 2.8rem;
    cursor: pointer;
  }
</style>
