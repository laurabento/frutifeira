<template>
  <div class="market">
    <Header
      :UserMarketer="this.marketer"
      :isOpenMarketerMenu="isOpenMarketerMenu"
      @openMarketerMenu="openMarketerMenu"
      :products="false"
    />
    <transition name="slide">
      <AddProducts v-if="isOpenProducts" @openProducts="openProducts" />
    </transition>
    <MarketDetails
      v-if="isOpenMarketDetails"
      @openProducts="openProducts"
      @openMarketDetails="openMarketDetails"
    />
    <MarketerArea :products="false" @openMarketDetails="openMarketDetails" />
    <MenuMobileMarketer v-if="isOpenMarketerMenu" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MarketerArea from "@/components/MarketerArea.vue";
import MenuMobileMarketer from "@/components/MenuMobileMarketer.vue";
import MarketDetails from "@/components/MarketDetails.vue";
import AddProducts from "@/components/AddProducts.vue";

export default {
  name: "Marketer",
  components: {
    MarketerArea,
    Header,
    MenuMobileMarketer,
    MarketDetails,
    AddProducts,
  },

  data() {
    return {
      marketer: true,
      isOpenMarketerMenu: false,
      isOpenMarketDetails: false,
      isOpenProducts: false,
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
  },
};
</script>

<style lang="less" scoped></style>
