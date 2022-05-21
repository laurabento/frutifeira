<template>
  <div class="list-all-products">
    <Header
      @openMenu="openMenu"
      @openCart="openCart"
      @openLocation="openLocation"
      @openLogin="openLogin"
      @openSignUp="openSignUp"
      :isOpenMenuProps="this.isOpenMenu"
      :UserClient="this.client"
    />
    <ProductDetails v-if="isOpenDetails" @openDetails="openDetails" :product="product"/>
    <transition name="slide-up">
      <Menu v-if="isOpenMenu" @openOrder="openOrder"/>
    </transition>
    <Login v-if="isOpenLogin" @openLogin="openLogin" @openSignUp="openSignUp"/>
    <SignUp v-if="isOpenSignUp" @openSignUp="openSignUp" />
    <transition name="slide">
      <Cart v-if="isOpenCart" />
    </transition>
    <ChangeCondominium v-if="isOpenLocation" @openLocation="openLocation" />
    <Order v-if="isOpenOrder" @openOrder="openOrder"/>
    <SearchBarHome />
    <ListAll @openDetails="openDetails"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchBarHome from "@/components/SearchBarHome.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Cart from "@/components/Cart.vue";
import ChangeCondominium from "@/components/ChangeCondominium.vue";
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import Order from "@/components/Order.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import ListAll from "@/components/ListAll.vue";

export default {
  name: "ListProduct",
  components: {
    Header,
    SearchBarHome,
    Footer,
    Menu,
    Cart,
    ChangeCondominium,
    Login,
    SignUp,
    Order,
    ProductDetails,
    ListAll
  },
  data() {
    return {
      isOpenMenu: false,
      isOpenCart: false,
      isOpenLocation: false,
      isOpenLogin: false,
      isOpenSignUp: false,
      isOpenOrder: false,
      isOpenDetails: false,
      client: true,
      product: [],
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
    openOrder() {
      return (this.isOpenOrder = !this.isOpenOrder);
    },
    openDetails(value) {
      this.product = value;
      return (this.isOpenDetails = !this.isOpenDetails);
    },
  },
};
</script>
