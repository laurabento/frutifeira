<template>
  <div class="market">
    <ModalConfirmation
      v-if="isOpenModalConfirmation"
      @openModalConfirmation="openModalConfirmation"
      :confirmationType="confirmationType"
    />
    <Header
      :UserMarketer="this.marketer"
      :isOpenMarketerMenu="isOpenMarketerMenu"
      @openMarketerMenu="openMarketerMenu"
      :products="false"
      :isOpenMenuProps="this.isOpenMenu"
      @openMenu="openMenu"
    />
    <transition name="slide-up">
      <Menu v-if="isOpenMenu" :admArea="true" />
    </transition>
    <transition name="slide">
      <AddProducts v-if="isOpenProducts" @openProducts="openProducts" />
    </transition>
    <MarketDetails
      v-if="isOpenMarketDetails"
      @openProducts="openProducts"
      @openMarketDetails="openMarketDetails"
    />
    <MarketerArea
      :products="false"
      @openMarketDetails="openMarketDetails"
      @openModalConfirmation="openModalConfirmation"
    />
    <MenuMobileMarketer v-if="isOpenMarketerMenu" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MarketerArea from "@/components/MarketerArea.vue";
import MenuMobileMarketer from "@/components/MenuMobileMarketer.vue";
import MarketDetails from "@/components/MarketDetails.vue";
import AddProducts from "@/components/AddProducts.vue";
import Menu from "@/components/Menu.vue";
import ModalConfirmation from "@/components/ModalConfirmation.vue";

export default {
  name: "Marketer",
  components: {
    MarketerArea,
    Header,
    MenuMobileMarketer,
    ModalConfirmation,
    MarketDetails,
    AddProducts,
    Menu,
  },
  created() {
    this.checkUser();
  },
  data() {
    return {
      marketer: true,
      isOpenMarketerMenu: false,
      isOpenMarketDetails: false,
      isOpenProducts: false,
      isOpenMenu: false,
      isOpenModalConfirmation: false,
      confirmationType: Number,
    };
  },
  methods: {
    openMarketerMenu() {
      return (this.isOpenMarketerMenu = !this.isOpenMarketerMenu);
    },
    openMarketDetails() {
      return (this.isOpenMarketDetails = !this.isOpenMarketDetails);
    },
    openProducts() {
      return (this.isOpenProducts = !this.isOpenProducts);
    },
    openMenu() {
      return (this.isOpenMenu = !this.isOpenMenu);
    },
    openModalConfirmation(value) {
      this.confirmationType = value;
      return (this.isOpenModalConfirmation = !this.isOpenModalConfirmation);
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

<style lang="less" scoped></style>
