<template>
  <div class="home">
    <Header
      @openMenu="openMenu"
      @openCart="openCart"
      @openLocation="openLocation"
      @openLogin="openLogin"
    />
    <Menu v-if="isOpenMenu" />
    <Login v-if="isOpenLogin" @openLogin="openLogin" />
    <transition name="slide">
      <Cart v-if="isOpenCart" />
    </transition>
    <ChangeCondominium v-if="isOpenLocation" @openLocation="openLocation" />
    <SearchBarHome />
    <Banner />
    <CardListHome :titleList="titleList" />
    <CardListHome :titleList="titleSecondList" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchBarHome from "@/components/SearchBarHome.vue";
import Banner from "@/components/Banner.vue";
import CardListHome from "@/components/CardListHome.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Cart from "@/components/Cart.vue";
import ChangeCondominium from "@/components/ChangeCondominium.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Header,
    SearchBarHome,
    Banner,
    CardListHome,
    Footer,
    Menu,
    Cart,
    ChangeCondominium,
    Login,
  },
  data() {
    return {
      titleList: "Ofertas da Semana",
      titleSecondList: "Destaque da Semana",
      isOpenMenu: false,
      isOpenCart: false,
      isOpenLocation: false,
      isOpenLogin: false,
    };
  },
  methods: {
    openMenu() {
      return (this.isOpenMenu = !this.isOpenMenu);
    },
    openCart() {
      return (this.isOpenCart = !this.isOpenCart);
    },
    openLocation() {
      return (this.isOpenLocation = !this.isOpenLocation);
    },
    openLogin() {
      return (this.isOpenLogin = !this.isOpenLogin);
    },
  },
};
</script>
