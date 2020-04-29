const registration = {
  state: {
    registrationStatus: '',
    emailStatus: '',
    loginStatus: '',
    error: '',
    uniqueEmail: true,
    uniqueLogin: true
  },
  mutations: {
    USER_REGISTRATION_REQUEST(state) {
      state.registrationStatus = 'loading'
    },
    USER_REGISTRATION_SUCCESS(state) {
      state.registrationStatus = 'success'
      state.error = ''
    },
    USER_REGISTRATION_ERROR(state, err) {
      state.registrationStatus = 'error'
      state.error = err
    },
    CHECK_UNIQUE_EMAIL_REQUEST(state) {
      state.emailStatus = 'loading'
    },
    CHECK_UNIQUE_EMAIL_SUCCESS(state, uniqueEmail ) {
      state.emailStatus = 'success'
      state.uniqueEmail = uniqueEmail
    },
    CHECK_UNIQUE_EMAIL_ERROR(state, err) {
      state.emailStatus = 'error'
      state.error = err
      state.uniqueEmail = false
    },
    CHECK_UNIQUE_LOGIN_REQUEST(state) {
      state.loginStatus = 'loading'
    },
    CHECK_UNIQUE_LOGIN_SUCCESS(state, uniqueLogin ) {
      state.loginStatus = 'success'
      state.uniqueLogin = uniqueLogin
    },
    CHECK_UNIQUE_LOGIN_ERROR(state, err) {
      state.loginStatus = 'error'
      state.error = err
      state.uniqueLogin = false
    }
  },
  actions: {
    USER_REGISTRATION({commit, state}, user) {
      //имитация запроса
      return new Promise((resolve, reject) => {
        console.log(user);
        commit('USER_REGISTRATION_REQUEST')
        setTimeout(() => {
          if (state.registrationStatus === 'loading') {
            commit('USER_REGISTRATION_SUCCESS')
            resolve()
          } else {
            const err = new Error('Не удалось зарегстрироваться')

            commit('USER_REGISTRATION_ERROR', err.message)
            reject(err)
          }
        }, 1000)
      })
      
      //Примерный запрос на регистрацию
      // return new Promise((resolve, reject) => {
      //   commit('USER_REGISTRATION_REQUEST')
      //   axios({
      //     url,
      //     data: user,
      //     method: 'POST'
      //   })
      //     .then(resp => {
      //       console.log('registration', resp.data)
      //       commit('USER_REGISTRATION_SUCCESS')
      //       resolve(resp)
      //     })
      //     .catch(err => {
      //       console.log('registr_err', err)
      //       commit('USER_REGISTRATION_ERROR')
      //       reject(err)
      //     })
      // })
    },
    CHECK_UNIQUE_EMAIL({commit, state}, email) {
      //имитация запроса
      console.log(email)
      return new Promise((resolve, reject) => {
        commit('CHECK_UNIQUE_EMAIL_REQUEST')
        setTimeout(() => {
          if (state.emailStatus === 'loading') {
            //пока просто передается true или false, но потом будет передаваться отвтет сервера
            commit('CHECK_UNIQUE_EMAIL_SUCCESS', false)
            resolve()
          } else {
            const err = new Error('Не удалось проверить уникальность email')

            commit('CHECK_UNIQUE_EMAIL_ERROR', err)
            reject(err)
          }
        }, 1000)
      })
      
      //Примерный запрос на регистрацию
      // return new Promise((resolve, reject) => {
      //   commit('CHECK_UNIQUE_EMAIL_REQUEST')
      //   axios({
      //     url,
      //     data: user,
      //     method: 'POST'
      //   })
      //     .then(resp => {
      //       console.log('registration', resp.data)
      //       const uniqueEmail = resp.data || false
      //       commit('CHECK_UNIQUE_EMAIL_SUCCESS', uniqueEmail)
      //       resolve(resp)
      //     })
      //     .catch(err => {
      //       console.log('registr_err', err)
      //       commit('CHECK_UNIQUE_EMAIL_ERROR', err)
      //       reject(err)
      //     })
      // })
    },
    CHECK_UNIQUE_LOGIN({commit, state}, login) {
      //имитация запроса
      console.log(login)
      return new Promise((resolve, reject) => {
        commit('CHECK_UNIQUE_LOGIN_REQUEST')
        setTimeout(() => {
          if (state.loginStatus === 'loading') {
            //пока просто передается true или false, но потом будет передаваться отвтет сервера
            commit('CHECK_UNIQUE_LOGIN_SUCCESS', false)
            resolve()
          } else {
            const err = new Error('Не удалось проверить уникальность логина')

            commit('CHECK_UNIQUE_LOGIN_ERROR', err)
            reject(err)
          }
        }, 1000)
      })
      
      //Примерный запрос на регистрацию
      // return new Promise((resolve, reject) => {
      //   commit('CHECK_UNIQUE_LOGIN_REQUEST')
      //   axios({
      //     url,
      //     data: user,
      //     method: 'POST'
      //   })
      //     .then(resp => {
      //       console.log('registration', resp.data)
      //       const uniqueLogin = resp.data || false
      //       commit('CHECK_UNIQUE_LOGIN_SUCCESS', uniqueLogin)
      //       resolve(resp)
      //     })
      //     .catch(err => {
      //       console.log('registr_err', err)
      //       commit('CHECK_UNIQUE_LOGIN_ERROR', err)
      //       reject(err)
      //     })
      // })
    }
  },
  getters: {
    uniqueLogin: state => state.uniqueLogin,
    uniqueEmail: state => state.uniqueEmail
  }
}

export default registration