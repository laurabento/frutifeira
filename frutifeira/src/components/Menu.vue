<template>
  <div class="menu" :class="userType != '1' && admArea ? 'no-marginTop' : ''">
    <div class="menu-items">
      <div class="menu-items_item dark">
        <div v-if="userType != null">
          <h1>Olá, {{ user.name }}!</h1>
          <p>Bem-vindo(a) ao Frutifeira!</p>
        </div>
        <div v-if="userType == null" :class="userType == null ? 'no-user' : ''">
          <h1>Bem-vindo(a) ao Frutifeira!</h1>
          <p>
            <span id="clickLabelLogin" @click="openLogin">Entre</span> ou
            <span id="clickLabelSignUp" @click="openSignUp">cadastre-se</span>
          </p>
        </div>
      </div>
      <div
        @click="
          openProfile();
          openMenu();
        "
        class="menu-items_item"
        v-if="
          userType != null &&
          (!admArea || userType != '3' || (admArea && userType == '2'))
        "
      >
        <h1>Perfil</h1>
        <p>Aqui você pode acessar seu perfil, alterar dados e senhas.</p>
      </div>
      <div
        class="menu-items_item"
        v-if="userType != null && (userType == '1' || !admArea)"
        @click="openOrder"
      >
        <h1>Pedidos</h1>
        <p>Aqui você pode acompanhar e rever seus pedidos</p>
      </div>
      <div class="menu-items_logout" @click="logout" v-if="userType != null">
        <h1 id="labelSair">Sair</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    admArea: Boolean,
  },
  async created() {
    this.userType = this.checkUser();
    const type =
      this.userType === "1"
        ? "users"
        : this.userType === "2"
        ? "marketvendors"
        : "condominium";
    this.user = await this.getUserInfo(type);
  },
  data() {
    return {
      userType: String,
      user: Object,
    };
  },
  methods: {
    getUserInfo(type) {
      return axios
        .get(
          `http://localhost:5000/api/v1.0/${type}/` +
            localStorage.getItem("id"),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
        .then((response) => {
          return response;
        })
        .then((response_json) => {
          return response_json.data;
        })
        .catch((error) => console.log(error));
    },
    openOrder() {
      this.$emit("openOrder");
    },
    openLogin() {
      this.$emit("openLogin");
      this.$emit("openMenu");
    },
    openSignUp() {
      this.$emit("openSignUp");
      this.$emit("openMenu");
    },
    openProfile() {
      if (this.admArea && this.userType === "2") {
        this.$emit("openMarketerProfile");
      } else {
        this.$emit("openClientProfile", this.user);
      }
    },
    checkUser() {
      const userType = localStorage.getItem("userType");
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
        if (this.$route.name != "LoginAdm")
          this.$router.push({ name: "LoginAdm" });
        else location.reload();
      } else {
        if (this.$route.name != "Home") this.$router.push({ name: "Home" });
        else location.reload();
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
      border-top: 2px solid @lightGray;
      padding: 20px;
      cursor: pointer;

      h1 {
        font-size: 14px;
        color: @green;
        text-transform: uppercase;
      }
    }

    &_item:first-of-type {
      border-top: none;
    }

    .dark {
      cursor: unset;

      h1 {
        color: @darkGray;
      }
    }

    .no-user {
      h1 {
        color: @green;
      }

      p {
        margin-top: 5px;

        span {
          font-weight: 600;
          cursor: pointer;
        }
      }
    }

    &_logout {
      padding: 20px;
      cursor: pointer;
      border-top: 2px solid @lightGray;

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
