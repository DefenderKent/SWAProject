const login = {
  state: {
    status: "",
    token: "",
    user: null,
    errorMessage: "",
    error: "",
  },
  mutations: {
    LOGIN_ERROR(state, { errorMessage }) {
      state.errorMessage = errorMessage;
    },
    clearError(state) {
      state.error = null;
    },
    AUTH_ERROR(state) {
      state.errorMessage = "Не верный логин или пароль";
    },
  },
  actions: {
    async loginUser({ commit }, { email, password }) {
      commit("clearError");
      if (email !== "vasa" || password !== "1234") {
        commit("AUTH_ERROR");
      }
    },
    logout() {},
  },
  getters: {
    errorMessage: (state) => state.errorMessage,
  },
};

export default login;
