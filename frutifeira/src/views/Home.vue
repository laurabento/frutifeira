<template>
  <div class="home">
    <Header />
    <SearchBarHome />
    <Banner />
    <CardListHome :titleList="titleList"/>
    <CardListHome :titleList="titleSecondList"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchBarHome from "@/components/SearchBarHome.vue";
import Banner from "@/components/Banner.vue";
import CardListHome from "@/components/CardListHome.vue";

export default {
  name: "Home",
  components: {
    Header,
    SearchBarHome,
    Banner,
    CardListHome,
  },
  data () {
    return {
      titleList: "Ofertas da Semana",
      titleSecondList: "Destaque da Semana",
    }
  }
};
</script>
