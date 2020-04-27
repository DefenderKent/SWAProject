import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/v-login";
import App from "../App";

import RemovePassword from "../components/v-remove-password";

Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: App },
  { path: "/login", name: "login", component: Login },
  {
    path: "/removepassword",
    name: "removepassword",
    component: RemovePassword,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
