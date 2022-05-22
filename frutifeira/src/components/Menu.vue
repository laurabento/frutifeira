<template>
  <div class="menu" :class="userType != '1' && admArea ? 'no-marginTop' : ''">
    <div class="menu-items">
      <div class="menu-items_item dark">
        <h1>Olá, Laura!</h1>
        <p>Bem-vindo(a) ao Frutifeira!</p>
      </div>
      <div
        @click="
          openProfile();
          openMenu();
        "
        class="menu-items_item"
        v-if="!admArea || userType != '3' || (admArea && userType == '2')"
      >
        <h1>Perfil</h1>
        <p>Aqui você pode acessar seu perfil, alterar dados e senhas.</p>
      </div>
      <div
        class="menu-items_item"
        v-if="userType == '1' || !admArea"
        @click="openOrder"
      >
        <h1>Pedidos</h1>
        <p>Aqui você pode acompanhar e rever seus pedidos</p>
      </div>
      <div class="menu-items_logout" @click="logout">
        <h1>Sair</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    admArea: Boolean,
  },
  created() {
    this.userType = this.checkUser();
  },
  data() {
    return {
      userType: String,
    };
  },
  methods: {
    openOrder() {
      this.$emit("openOrder");
    },
    openProfile() {
      if (this.admArea && this.userType === "2") {
        this.$emit("openMarketerProfile");
      }
    },
    checkUser() {
      const userType = localStorage.getItem("userType");
      console.log(userType);
      return userType;
    },
    openMenu() {
      this.$emit("openMenu");
    },
    logout() {
      localStorage.removeItem("id");
      localStorage.removeItem("userType");
      localStorage.removeItem("accessToken");

      if (this.admArea) {
        this.$router.push({ name: "LoginAdm" });
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.menu {
  width: 495px;
  height: auto;
  position: fixed;
  z-index: 2;
  background-color: white;
  border-radius: 0 0 16px 16px;
  box-shadow: 0px 30px 30px 7px #0000001a;
  right: @margin-body-desktop;
  margin-top: @height-menu-desktop;

  &-items {
    &_item {
      border-bottom: 2px solid @lightGray;
      padding: 20px;
      cursor: pointer;

      h1 {
        font-size: 14px;
        color: @green;
        text-transform: uppercase;
      }
    }

    .dark {
      cursor: unset;

      h1 {
        color: @darkGray;
      }
    }

    &_logout {
      padding: 20px;
      cursor: pointer;

      h1 {
        font-size: 14px;
        color: @darkGray;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 768px) {
    right: unset;
    width: 100%;
    border-radius: unset;
    margin-top: @height-menu-mobile;

    &-items {
      &_item {
        p {
          font-size: 12px;
        }
      }
    }
  }
}

.no-marginTop {
  margin-top: -10px;
}
</style>
