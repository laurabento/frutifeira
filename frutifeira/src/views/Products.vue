<template>
  <div class="marketer">
    <Header
      :UserMarketer="this.marketer"
      :isOpenMarketerMenu="isOpenMarketerMenu"
      @openMarketerMenu="openMarketerMenu"
      :products="true"
    />
    <MarketerArea :products="true" />
    <MenuMobileMarketer v-if="isOpenMarketerMenu" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MarketerArea from "@/components/MarketerArea.vue";
import MenuMobileMarketer from "@/components/MenuMobileMarketer.vue";

export default {
  name: "Marketer",
  components: {
    MarketerArea,
    Header,
    MenuMobileMarketer,
  },
  data() {
    return {
      marketer: true,
      isOpenMarketerMenu: false,
    };
  },
  methods: {
    openMarketerMenu() {
      return (this.isOpenMarketerMenu = !this.isOpenMarketerMenu);
    },
  },
};
</script>

<style></style>
