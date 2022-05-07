<template>
  <div class="marketer">
    <Header
      :UserMarketer="this.marketer"
      :isOpenMarketerMenu="isOpenMarketerMenu"
      @openMarketerMenu="openMarketerMenu"
      :products="false"
    />
    <MarketDetails v-if="isOpenMarketDetails" />
    <MarketerArea :products="false" @openMarketDetails="openMarketDetails" />
    <MenuMobileMarketer v-if="isOpenMarketerMenu" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MarketerArea from "@/components/MarketerArea.vue";
import MenuMobileMarketer from "@/components/MenuMobileMarketer.vue";
import MarketDetails from "@/components/MarketDetails.vue";

export default {
  name: "Marketer",
  components: {
    MarketerArea,
    Header,
    MenuMobileMarketer,
    MarketDetails,
  },

  data() {
    return {
      marketer: true,
      isOpenMarketerMenu: false,
      isOpenMarketDetails: false,
    };
  },
  methods: {
    openMarketerMenu() {
      return (this.isOpenMarketerMenu = !this.isOpenMarketerMenu);
    },
    openMarketDetails() {
      return (this.isOpenMarketDetails = !this.isOpenMarketDetails);
    },
  },
};
</script>

<style></style>
