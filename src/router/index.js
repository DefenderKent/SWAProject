import Vue from "vue";
import VueRouter from "vue-router";
import UserAuth from "../components/UserAuth";
import App from "../App";

import UserAuthPasswordRemove from "../components/UserAuthPasswordRemove";

Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: App },
  { path: "/login", name: "login", component: UserAuth },
  {
    path: "/removepassword",
    name: "removepassword",
    component: UserAuthPasswordRemove,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
