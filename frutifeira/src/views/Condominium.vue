<template>
  <div>
    <Header
      :UserCondominium="this.condominium"
      :isOpenMenuProps="this.isOpenMenu"
      @openMenu="openMenu"
    />
    <transition name="slide-up">
      <Menu v-if="isOpenMenu" :admArea="true" />
    </transition>
    <CondominiumArea />
  </div>
</template>

<script>
import CondominiumArea from "@/components/CondominiumArea.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Condominium",
  created() {
    this.checkUser();
  },
  components: {
    CondominiumArea,
    Header,
    Menu,
  },
  data() {
    return {
      condominium: true,
      isOpenMenu: false,
    };
  },
  methods: {
    openMenu() {
      return (this.isOpenMenu = !this.isOpenMenu);
    },
    checkUser() {
      const id = localStorage.getItem("id");

      if (id === null) {
        this.$router.push({ name: "LoginAdm" });
      }
    },
  },
};
</script>

<style></style>
