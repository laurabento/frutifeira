import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginAdm from "../views/LoginAdm.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Condominium from "../views/Condominium.vue";

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
  {
    path: "/CreateAccount",
    name: "Criar conta",
    component: CreateAccount,
  },
  {
    path: "/Condominium",
    name: "Condomínio",
    component: Condominium,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
