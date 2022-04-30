import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginAdm from "../views/LoginAdm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/LoginAdm",
    name: "Login",
    component: LoginAdm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
