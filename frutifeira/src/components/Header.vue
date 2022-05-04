<template>
  <div class="main-header" :class="hasUserClass(this.UserClient)">
    <div class="menu-mobile" v-if="UserMarketer" @click="openMarketerMenu">
      <div :class="changeMenuIcon(isOpenMarketerMenu)"/>
    </div>
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
    <div class="main-header_nav" v-if="UserMarketer">
      <div class="notification">
        <img src="../assets/bell-green.svg"/>
      </div>
      <div class="user">
        <img src="../assets/person.svg" />
      </div>
    </div>
    <div class="main-header_nav" v-if="UserCondominium">
      <div class="notification">
        <img src="../assets/bell-green.svg"/>
      </div>
      <div class="user">
        <img src="../assets/person.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpenMenuProps: Boolean,
    UserClient: Boolean,
    UserMarketer: Boolean,
    UserCondominium: Boolean,
    isOpenMarketerMenu: Boolean,
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
    openMarketerMenu() {
      this.$emit("openMarketerMenu");
    },
    changeArrowIcon(isOpenMenuProps) {
      return !isOpenMenuProps ? "arrow-start" : "arrow";
    },
    hasUserClass(UserClient) {
      return UserClient ? 'justify-between' : '';
    },
    changeMenuIcon(isOpenMarketerMenu) {
      return !isOpenMarketerMenu ? "menu-img" : "menu-img-close";
    },
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
  z-index: 4;
  box-shadow: -4px 1px 15px 0px #0000001a;
  top: 0;

  img {
    height: 33px;
  }

  .menu-mobile {
    display: none;
  }

  &_nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;

    img {
      height: 25px;
      width: 25px;
      cursor: pointer;
    }

    .user {
        display: flex;
        align-items: center;

        &::before {
          content: "";
          height: 47px;
          width: 1px;
          border-radius: 1px;
          background-color: @lightGray;
          margin: 0 25px 0 25px;
        }
      }
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

    .menu-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
    
      .menu-img {
        height: 27px;
        width: 27px;
        background-image: url("../assets/menu-gray.svg");
        transition: all 0.25s;
        transform: rotate(0);
      }

      .menu-img-close {
        height: 27px;
        width: 27px;
        background-image: url("../assets/close-gray.svg");
        transition: all 0.25s;
        transform: rotate(90deg);
      }
    }

    &_marketer {
      display: none;
    }

    .user {
      margin-left: 15px;

      &::before {
        display: none;
      }
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
