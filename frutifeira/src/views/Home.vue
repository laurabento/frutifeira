<template>
  <div class="home">
    <Header />
    <SearchBarHome />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchBarHome from "@/components/SearchBarHome.vue";

export default {
  name: "Home",
  components: {
    Header,
    SearchBarHome,
  },
};
</script>
