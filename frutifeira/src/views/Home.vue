<template>
  <div class="home">
    <Header @openMenu="openMenu"/>
    <Menu v-if="isOpen"/>
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


export default {
  name: "Home",
  components: {
    Header,
    SearchBarHome,
    Banner,
    CardListHome,
    Footer,
    Menu,
  },
  data () {
    return {
      titleList: "Ofertas da Semana",
      titleSecondList: "Destaque da Semana",
      isOpen: false,
    }
  },
  methods: {
    openMenu() {
      return this.isOpen = !this.isOpen;
    }
  }
};
</script>
