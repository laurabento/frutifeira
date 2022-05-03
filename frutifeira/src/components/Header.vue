<template>
  <div class="main-header" :class="hasUserClass(this.UserClient)">
    <img src="../assets/logo-frutifeira.svg" />
    <div class="main-header_items" v-if="UserClient">
      <div class="location" @click="openLocation">
        <img class="location-icon" src="../assets/location.svg" />
        <label>Qual seu condomínio?</label>
      </div>
      <div class="bag" @click="openCart">
        <img src="../assets/bag.svg" />
        <div class="bag_items">
          <label>R$ 0,00</label>
          <span>0 itens</span>
        </div>
      </div>
      <div class="login" @click="openMenu">
        <img src="../assets/person.svg" />
        <label>Entrar</label>
        <div :class="changeArrowIcon(isOpenMenuProps)"></div>
      </div>
    </div>
    <div class="main-header_marketer" v-if="UserMarketer">
      <ul>
        <li>Produtos</li>
        <li>Feiras</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpenMenuProps: Boolean,
    UserClient: Boolean,
    UserMarketer: Boolean,
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    openCart() {
      this.$emit("openCart");
    },
    openLocation() {
      this.$emit("openLocation");
    },
    openSignUp() {
      this.$emit("openSignUp");
    },
    changeArrowIcon(isOpenMenuProps) {
      return !isOpenMenuProps ? "arrow-start" : "arrow";
    },
    hasUserClass(UserClient) {
      return UserClient ? 'justify-between' : '';
    }
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.main-header {
  display: flex;
  align-items: center;
  height: @height-menu-desktop;
  padding-right: @margin-body-desktop;
  padding-left: @margin-body-desktop;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 3;
  box-shadow: -4px 1px 15px 0px #0000001a;
  top: 0;

  img {
    height: 33px;
  }

  &_items {
    display: flex;
    align-items: center;

    img {
      height: 25px;
      width: 25px;
      margin-right: 16px;
    }

    label {
      font-weight: 500;
    }

    span {
      font-size: 10px;
    }

    .location {
      display: flex;
      align-items: center;
      cursor: pointer;

      label {
        cursor: pointer;
      }
    }

    .bag {
      display: flex;
      align-items: center;
      cursor: pointer;

      label {
        cursor: pointer;
      }

      &_items {
        display: flex;
        flex-direction: column;
      }
    }

    .login {
      display: flex;
      align-items: center;
      cursor: pointer;

      label {
        cursor: pointer;
        margin-right: 10px;
      }

      .arrow-start {
        background-image: url("../assets/arrow-green-start.svg");
        height: 24px;
        width: 24px;
        transition: all 0.25s;
        transform: rotate(0);
      }

      .arrow {
        background-image: url("../assets/arrow-green-start.svg");
        height: 24px;
        width: 24px;
        transition: all 0.25s;
        transform: rotate(180deg);
      }
    }

    .location::after,
    .bag:after {
      content: "";
      height: 47px;
      width: 1px;
      border-radius: 1px;
      background-color: @gray;
      margin: 0 25px 0 25px;
    }
  }

  &_marketer {
    ul {
      display: flex;

      li {
        padding-left: 50px;
        cursor: pointer;

        &:hover {
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: @height-menu-mobile;
    padding-left: @margin-menu-mobile;
    padding-right: @margin-menu-mobile;

    img {
      height: 22px;
    }

    &_items {
      img {
        margin-right: unset;
      }

      label,
      span {
        display: none;
      }

      .location,
      .bag {
        img {
          margin-right: 10px;
        }
      }

      .location::after,
      .bag:after {
        display: none;
      }

      .login {
        .arrow,
        .arrow-start {
          display: none;
        }
      }
    }
  }
}

.justify-between {
  justify-content: space-between;
}


</style>
