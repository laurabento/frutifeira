<template>
  <div class="home">
    <Spiner :active="active"/>
    <Header
      @openMenu="openMenu"
      @openCart="openCart"
      @openLocation="openLocation"
      @openLogin="openLogin"
      @openSignUp="openSignUp"
      :isOpenMenuProps="this.isOpenMenu"
      :UserClient="this.client"
    />
    <ModalCondominiumStart v-if="isOpenCondominiunModal || hasCondominium" @closeOpenModal="closeOpenModal"/>
    <ProductDetails v-if="isOpenDetails" @openDetails="openDetails" />
    <transition name="slide-up">
      <Menu v-if="isOpenMenu" @openOrder="openOrder"/>
    </transition>
    <Login v-if="isOpenLogin" @openLogin="openLogin" @openSignUp="openSignUp"/>
    <SignUp v-if="isOpenSignUp" @openSignUp="openSignUp" />
    <transition name="slide">
      <Cart v-if="isOpenCart" />
    </transition>
    <ChangeCondominium v-if="isOpenLocation" @openLocation="openLocation" @closeOpenModal="closeOpenModal"/>
    <Order v-if="isOpenOrder" @openOrder="openOrder"/>
    <SearchBarHome />
    <Banner />
    <Carousel :marketersCondominiumList="marketersCondominiumList"/>
    <CardListHome :titleList="titleList" @openDetails="openDetails" />
    <CardListHome :titleList="titleSecondList" @openDetails="openDetails" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

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
import Order from "@/components/Order.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Carousel from "@/components/Carousel.vue";
import ModalCondominiumStart from "@/components/ModalCondominiumStart.vue";
import Spiner from "@/components/Spiner.vue";

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
    Order,
    ProductDetails,
    Carousel,
    ModalCondominiumStart,
    Spiner
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
      isOpenOrder: false,
      isOpenDetails: false,
      isOpenCondominiunModal: true,
      hasCondominium: true,
      client: true,
      active: false,
      marketersCondominiumList: [],
    };
  },
  created() {
    localStorage.getItem("condominium") ? this.hasCondominium = false : this.hasCondominium = true;

    if(localStorage.getItem("condominium") != null) {
      this.loadCondominiumMarketers();
    }
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
    openOrder() {
      return (this.isOpenOrder = !this.isOpenOrder);
    },
    openDetails() {
      return (this.isOpenDetails = !this.isOpenDetails);
    },
    closeOpenModal() {
      if(localStorage.getItem("condominium") != null) {
        this.loadCondominiumMarketers();
      } 
      return (this.isOpenCondominiunModal = !this.isOpenCondominiunModal);
    },
    hasCondominiumOnLocalStorage() {
      return localStorage.getItem("condominium") ? this.hasCondominium = false : this.hasCondominium = true;
    },
    async loadCondominiumMarketers() {
      try {
        this.active = true
        const getCondominium = JSON.parse(localStorage.getItem("condominium"));
        const condominiumMarketers = await axios.get(`http://localhost:5000/api/v1.0/marketcondominium/condominio/${getCondominium._id}`);
        const response = condominiumMarketers.data;
        response.forEach(item => {
          this.marketersCondominiumList.push(item.name)
        });
        this.active = false
      } catch (error) {
        console.error('Not found Marketers')
        this.marketersCondominiumList = []
        this.active = false
      }
    }
  },
};
</script>
