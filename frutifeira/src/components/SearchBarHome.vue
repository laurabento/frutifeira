<template>
  <div class="search-bar">
    <div class="search-bar_items">
      <div class="categories" @click="isOpen = !isOpen">
        <div :class="changeIcon(isOpen)"></div>
        <label>Categorias</label>
      </div>
      <div class="search-bar_group">
        <img src="../assets/search-white.svg" />
        <input type="text" />
      </div>
    </div>
    <transition name="slide-fade">
      <Categories v-if="isOpen" />
    </transition>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";

export default {
  components: {
    Categories,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    changeIcon(isOpen) {
      return !isOpen ? "menu-icon" : "close-icon";
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;

  &_items {
    z-index: 1;
    background-color: @green;
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    margin-top: @height-menu-desktop;

    .categories {
      display: flex;
      align-items: center;
      margin-right: 60px;
      cursor: pointer;

      div {
        margin-right: 10px;
        cursor: pointer;
      }

      label {
        color: white;
        font-weight: 500;
        cursor: pointer;
      }

      .menu-icon {
        background: url("../assets/menu.svg");
        height: 24px;
        width: 24px;
        transition: all 0.25s;
        transform: rotate(0);
      }

      .close-icon {
        background: url("../assets/close.svg");
        height: 24px;
        width: 24px;
        transition: all 0.25s;
        transform: rotate(90deg);
      }
    }
  }

  &_group {
    display: flex;
    width: 100%;

    img {
      border-radius: 6px 0 0 6px;
      background: @white-20;
      padding: 13px;
    }

    input {
      padding: 16px 16px 16px 0;
      border-radius: 0 6px 6px 0;
      background: @white-20;
      color: white;
      font-weight: 500;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    &_items {
      padding-left: @margin-menu-mobile;
      padding-right: @margin-menu-mobile;
      margin-top: @height-menu-mobile;

      .categories {
        margin-right: 10px;

        label {
          display: none;
        }
      }
    }
  }
}
</style>
