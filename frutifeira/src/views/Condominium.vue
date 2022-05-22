<template>
  <div>
    <Header
      :UserCondominium="this.condominium"
      :isOpenMenuProps="this.isOpenMenu"
      @openMenu="openMenu"
    />
    <ModalConfirmation
      :confirmationType="confirmationType"
      @openModalConfirmation="openModalConfirmation"
      v-if="isOpenModalConfirmation"
    />
    <transition name="slide-up">
      <Menu v-if="isOpenMenu" :admArea="true" />
    </transition>
    <CondominiumArea @openModalConfirmation="openModalConfirmation" />
  </div>
</template>

<script>
import CondominiumArea from "@/components/CondominiumArea.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import ModalConfirmation from "@/components/ModalConfirmation.vue";

export default {
  name: "Condominium",
  created() {
    this.checkUser();
  },
  components: {
    CondominiumArea,
    Header,
    Menu,
    ModalConfirmation,
  },
  data() {
    return {
      condominium: true,
      isOpenMenu: false,
      isOpenModalConfirmation: false,
      confirmationType: Number,
    };
  },
  methods: {
    openMenu() {
      return (this.isOpenMenu = !this.isOpenMenu);
    },
    checkUser() {
      const id = localStorage.getItem("id");
      const userType = localStorage.getItem("userType");

      if (id === null || userType === null || userType != 3) {
        this.$router.push({ name: "LoginAdm" });
      }
    },
    openModalConfirmation(id) {
      this.confirmationType = id;
      return (this.isOpenModalConfirmation = !this.isOpenModalConfirmation);
    },
  },
};
</script>

<style></style>
