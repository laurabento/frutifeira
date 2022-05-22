<template>
  <div class="marketer">
    <Header
      :UserMarketer="this.marketer"
      :isOpenMarketerMenu="isOpenMarketerMenu"
      @openMarketerMenu="openMarketerMenu"
      :products="true"
      :isOpenMenuProps="this.isOpenMenu"
      @openMenu="openMenu"
    />
    <MarketerProfile
      v-if="isOpenMarketerProfile"
      @openMarketerProfile="openMarketerProfile"
    />
    <transition name="slide-up">
      <Menu
        v-if="isOpenMenu"
        :admArea="true"
        @openMenu="openMenu"
        @openMarketerProfile="openMarketerProfile"
      />
    </transition>
    <MarketerArea :products="true" />
    <MenuMobileMarketer v-if="isOpenMarketerMenu" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MarketerArea from "@/components/MarketerArea.vue";
import Menu from "@/components/Menu.vue";
import MenuMobileMarketer from "@/components/MenuMobileMarketer.vue";
import MarketerProfile from "@/components/MarketerProfile.vue";

export default {
  name: "Marketer",
  components: {
    MarketerArea,
    Header,
    MenuMobileMarketer,
    Menu,
    MarketerProfile,
  },
  created() {
    this.checkUser();
  },
  data() {
    return {
      marketer: true,
      isOpenMarketerMenu: false,
      isOpenMenu: false,
      isOpenMarketerProfile: false,
    };
  },
  methods: {
    openMarketerMenu() {
      return (this.isOpenMarketerMenu = !this.isOpenMarketerMenu);
    },
    openMarketerProfile() {
      return (this.isOpenMarketerProfile = !this.isOpenMarketerProfile);
    },
    openMenu() {
      return (this.isOpenMenu = !this.isOpenMenu);
    },
    checkUser() {
      const id = localStorage.getItem("id");
      const userType = localStorage.getItem("userType");

      if (id === null || userType === null || userType != 2) {
        this.$router.push({ name: "LoginAdm" });
      }
    },
  },
};
</script>

<style></style>
