<template>
  <div class="home">
    <Header
      @openMenu="openMenu"
      @openCart="openCart"
      @openLocation="openLocation"
      @openLogin="openLogin"
      @openSignUp="openSignUp"
      @openModalSuccess="openModalSuccess"
    />
    <ModalSuccess @openModalSuccess="openModalSuccess" v-if="isOpenSuccess" />
    <ProductDetails v-if="isOpenDetails" @openDetails="openDetails" />
    <Menu v-if="isOpenMenu" />
    <Login v-if="isOpenLogin" @openLogin="openLogin" />
    <SignUp v-if="isOpenSignUp" @openSignUp="openSignUp" />
    <transition name="slide">
      <Cart v-if="isOpenCart" />
    </transition>
    <ChangeCondominium v-if="isOpenLocation" @openLocation="openLocation" />
    <SearchBarHome />
    <Banner />
    <CardListHome :titleList="titleList" @openDetails="openDetails" />
    <CardListHome :titleList="titleSecondList" @openDetails="openDetails" />
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
import SignUp from "@/components/SignUp.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import ModalSuccess from "@/components/ModalSuccess.vue";

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
    SignUp,
    ProductDetails,
    ModalSuccess,
  },
  data() {
    return {
      titleList: "Ofertas da Semana",
      titleSecondList: "Destaque da Semana",
      isOpenMenu: false,
      isOpenCart: false,
      isOpenLocation: false,
      isOpenLogin: false,
      isOpenSignUp: false,
      isOpenDetails: false,
      isOpenSuccess: false,
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
    openSignUp() {
      return (this.isOpenSignUp = !this.isOpenSignUp);
    },
    openDetails() {
      return (this.isOpenDetails = !this.isOpenDetails);
    },
    openModalSuccess() {
      return (this.isOpenSuccess = !this.isOpenSuccess);
    },
  },
};
</script>
