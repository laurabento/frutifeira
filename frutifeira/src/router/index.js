import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginAdm from "../views/LoginAdm.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Condominium from "../views/Condominium.vue";
import Marketer from "../views/Marketer.vue";
import Payment from "../views/Payment.vue";

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
  {
    path: "/Feirante",
    name: "Feirante",
    component: Marketer,
  },
  {
    path: "/Payment",
    name:"Pagamento",
    component: Payment
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
