<template>
  <div class="home">
    <Spiner :active="active" />
    <Header
      @openMenu="openMenu"
      @openCart="openCart"
      @openLocation="openLocation"
      @openLogin="openLogin"
      @openSignUp="openSignUp"
      :isOpenMenuProps="this.isOpenMenu"
      :UserClient="this.client"
      :cartTotal="cartTotal"
      :qnt="qnt"
    />
    <ModalCondominiumStart
      v-if="isOpenCondominiunModal && hasCondominium"
      @closeOpenModal="closeOpenModal"
    />
    <ProductDetails
      v-if="isOpenDetails"
      @openDetails="openDetails"
      :product="product"
      @forceRender="forceRender"
    />
    <transition name="slide-up">
      <Menu
        v-if="isOpenMenu"
        @openOrder="openOrder"
        :admArea="false"
        @openLogin="openLogin"
        @openSignUp="openSignUp"
        @openMenu="openMenu"
        @openClientProfile="openClientProfile"
      />
    </transition>
    <ClientProfile
      v-if="isOpenClientProfile"
      @openClientProfile="openClientProfile"
      :client="userClient"
    />
    <Login v-if="isOpenLogin" @openLogin="openLogin" @openSignUp="openSignUp" />
    <SignUp
      v-if="isOpenSignUp"
      @openSignUp="openSignUp"
      @openLogin="openLogin"
    />
    <transition name="slide">
      <Cart v-if="isOpenCart" @forceRender="forceRender" />
    </transition>
    <ChangeCondominium
      v-if="isOpenLocation"
      @openLocation="openLocation"
      @closeOpenModal="closeOpenModal"
    />
    <Order v-if="isOpenOrder" @openOrder="openOrder" />
    <SearchBarHome />
    <Banner />
    <Carousel :marketersCondominiumList="marketersCondominiumList" />
    <CardListHome
      :titleList="titleList"
      @openDetails="openDetails"
      :saleList="saleList"
    />
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
import ClientProfile from "@/components/ClientProfile.vue";

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
    Spiner,
    ClientProfile,
  },
  data() {
    return {
      titleList: "Principais Ofertas",
      isOpenMenu: false,
      isOpenCart: false,
      isOpenLocation: false,
      isOpenLogin: false,
      isOpenSignUp: false,
      isOpenOrder: false,
      isOpenDetails: false,
      isOpenCondominiunModal: true,
      hasCondominium: true,
      isOpenClientProfile: false,
      client: true,
      active: false,
      marketersCondominiumList: [],
      saleList: [],
      qnt: 0,
      cartTotal: 0,
      product: [],
      userClient: [],
    };
  },
  created() {
    localStorage.getItem("condominium")
      ? (this.hasCondominium = false)
      : (this.hasCondominium = true);

    if (localStorage.getItem("condominium") != null) {
      this.loadCondominiumMarketers();
    }
    this.checkCart();
  },
  methods: {
    checkCart() {
      if (localStorage.getItem("cart")) {
        const cart = JSON.parse(localStorage.getItem("cart"));
        var amount = 0;
        var total = 0;
        cart.forEach(function (product) {
          amount += product.amount;
          total += parseFloat(product.price.replace(",", "."));
        });

        this.qnt = amount;
        this.cartTotal = total;
      }
    },
    forceRender() {
      this.checkCart();
      this.isOpenCart = false;

      this.$nextTick(() => {
        this.isOpenCart = true;
      });
    },
    openClientProfile(value) {
      this.userClient = value;
      return (this.isOpenClientProfile = !this.isOpenClientProfile);
    },
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
    openDetails(value) {
      this.product = value;
      return (this.isOpenDetails = !this.isOpenDetails);
    },
    closeOpenModal() {
      if (localStorage.getItem("condominium") != null) {
        this.loadCondominiumMarketers();
      }
      return (this.isOpenCondominiunModal = !this.isOpenCondominiunModal);
    },
    hasCondominiumOnLocalStorage() {
      return localStorage.getItem("condominium")
        ? (this.hasCondominium = false)
        : (this.hasCondominium = true);
    },
    async loadCondominiumMarketers() {
      try {
        this.active = true;
        this.marketersCondominiumList = [];
        const getCondominium = JSON.parse(localStorage.getItem("condominium"));
        const condominiumMarketers = await axios.get(
          `http://localhost:5000/api/v1.0/marketcondominium/condominio/${getCondominium._id}`,
        );
        const response = condominiumMarketers.data;
        response.forEach((item) => {
          this.marketersCondominiumList.push(item);
        });
        const saleOffers = await axios.get(
          `http://localhost:5000/api/v1.0/marketcondominium/condominio/${getCondominium._id}/desconto`,
        );
        this.saleList = saleOffers.data;
        this.active = false;
      } catch (error) {
        console.error("Not found Marketers");
        this.marketersCondominiumList = [];
        this.active = false;
      }
    },
  },
};
</script>
