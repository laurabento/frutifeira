<template>
  <div class="list-products">
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
    <ProductDetails
      v-if="isOpenDetails"
      @openDetails="openDetails"
      :product="product"
      @forceRender="forceRender"
    />
    <transition name="slide-up">
      <Menu v-if="isOpenMenu" @openOrder="openOrder" />
    </transition>
    <Login v-if="isOpenLogin" @openLogin="openLogin" @openSignUp="openSignUp" />
    <SignUp v-if="isOpenSignUp" @openSignUp="openSignUp" />
    <transition name="slide">
      <Cart v-if="isOpenCart" @forceRender="forceRender" />
    </transition>
    <ChangeCondominium v-if="isOpenLocation" @openLocation="openLocation" />
    <Order v-if="isOpenOrder" @openOrder="openOrder" />
    <SearchBarHome />
    <List
      @openDetails="openDetails"
      :productsMarketersList="productsMarketersList"
      :marketerName="marketerName"
    />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

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
import List from "@/components/List.vue";
import Spiner from "@/components/Spiner.vue";

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
    List,
    Spiner,
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
      active: false,
      productsMarketersList: [],
      marketerName: [],
      qnt: 0,
      cartTotal: 0,
    };
  },
  created() {
    this.findMarketerProducts(this.$route.params.id);
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
    forceRender() {
      this.checkCart();
      this.isOpenCart = false;

      this.$nextTick(() => {
        this.isOpenCart = true;
      });
    },
    async findMarketerProducts(id) {
      try {
        this.active = true;
        const marketer = await axios.get(
          `http://localhost:5000/api/v1.0/products/feirante/${id}`,
        );
        const marketerName = await axios.get(
          `http://localhost:5000/api/v1.0/products/feirante/${id}/nome`,
        );
        this.marketerName = marketerName.data;
        this.productsMarketersList = marketer.data;
        this.active = false;
      } catch (error) {
        console.error("Not found Products");
      }
    },
  },
};
</script>
