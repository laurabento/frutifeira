<template>
  <div class="container">
    <img
      class="container-close"
      src="../assets/close-gray.svg"
      alt=""
      @click="openProducts"
    />
    <div class="search-bar">
      <img src="../assets/search-gray.svg" />
      <input type="text" placeholder="Qual produto você procura?" />
    </div>
    <div class="items">
      <CardProduct :showBorder="false" />
      <CardProduct :showBorder="false" />
      <CardProduct :showBorder="false" />
      <CardProduct :showBorder="false" />
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
export default {
  components: {
    CardProduct,
  },
  methods: {
    openProducts() {
      this.$emit("openProducts");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.container {
  display: flex;
  flex-direction: column;
  background-color: @lightGray;
  width: 505px;
  height: calc(100% ~"-" @height-menu-desktop);
  position: fixed;
  z-index: 3;
  right: 0;
  box-shadow: -35px 0px 30px -35px rgba(0, 0, 0, 0.25);
  padding: 20px @margin-body-desktop @margin-body-desktop @margin-body-desktop;
  margin-top: -10px;
  overflow: hidden;

  &-close {
    width: 24px;
    height: 24px;
    align-self: flex-end;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .search-bar {
    display: flex;
    background-color: white;
    border-radius: 6px;
    margin-bottom: 30px;

    img {
      padding: 13px 0 13px 13px;
    }

    input {
      padding: 16px;
      color: @gray;
    }

    ::placeholder {
      color: @gray;
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
