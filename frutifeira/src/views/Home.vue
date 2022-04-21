<template>
  <div class="home">
    <Header @openMenu="openMenu" @openCart="openCart"/>
    <Menu v-if="isOpenMenu"/>
    <transition name="slide">
      <Cart v-if="isOpenCart"/>
    </transition>  
    <SearchBarHome />
    <Banner />
    <CardListHome :titleList="titleList"/>
    <CardListHome :titleList="titleSecondList"/>
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


export default {
  name: "Home",
  components: {
    Header,
    SearchBarHome,
    Banner,
    CardListHome,
    Footer,
    Menu,
    Cart
  },
  data () {
    return {
      titleList: "Ofertas da Semana",
      titleSecondList: "Destaque da Semana",
      isOpenMenu: false,
      isOpenCart: false,
    }
  },
  methods: {
    openMenu() {
      return this.isOpenMenu = !this.isOpenMenu;
    },
    openCart() {
      return this.isOpenCart = !this.isOpenCart;
    }
  }
};
</script>
