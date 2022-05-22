<template>
  <div class="list-all-products">
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
    <ListAll
      @openDetails="openDetails"
      :productsCondominium="productsCondominium"
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
import ListAll from "@/components/ListAll.vue";
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
    ListAll,
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
      productsCondominium: [],
      active: false,
      qnt: 0,
      cartTotal: 0,
      labelSearch: "",
    };
  },
  created() {
    this.loadCondominiumProducts(this.$route.params.id);
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
    async loadCondominiumProducts(id) {
      try {
        this.active = true;
        this.productsCondominium = [];
        const condominiumProducts = await axios.get(
          `http://localhost:5000/api/v1.0/marketcondominium/condominio/${id}/produtos`,
        );
        const response = condominiumProducts.data;
        console.log(response);

        if (this.$route.query.type == "fruits") {
          this.productsCondominium = [];
          const results = response.filter((item) => {
            return item.product_type.find((type) => type === "Fruta");
          });
          this.productsCondominium = results;
        }
        if (this.$route.query.type == "vegetables") {
          this.productsCondominium = [];
          const results = response.filter((item) => {
            return item.product_type.find((type) => type === "Verdura");
          });
          this.productsCondominium = results;
        }
        if (this.$route.query.type == "legumes") {
          this.productsCondominium = [];
          const results = response.filter((item) => {
            return item.product_type.find((type) => type === "Legume");
          });
          this.productsCondominium = results;
        }
        if (this.$route.query.type == "pastel") {
          this.productsCondominium = [];
          const results = response.filter((item) => {
            return item.product_type.find((type) => type === "Pastel");
          });
          this.productsCondominium = results;
        }
        if (this.$route.query.type == "fish") {
          this.productsCondominium = [];
          const results = response.filter((item) => {
            return item.product_type.find((type) => type === "Peixe");
          });
          this.productsCondominium = results;
        }
        if (this.$route.query.type == "all") {
          this.productsCondominium = [];
          this.productsCondominium = response;
        }
        if (this.$route.query.search) {
          this.productsCondominium = [];
          const results = response.filter((item) => {
            return item.name === this.$route.query.search;
          });
          this.productsCondominium = results;
        }
        this.active = false;
      } catch (error) {
        console.error("Not found Products");
        this.productsCondominium = [];
        this.active = false;
      }
    },
  },
};
</script>
