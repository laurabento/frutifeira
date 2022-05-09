<template>
  <div class="container">
    <div class="search-bar">
      <img src="../assets/search-gray.svg" />
      <input type="text" placeholder="O que você procura?" />
    </div>
    <div class="items">
      <CardProduct :showBorder="true" />
      <CardProduct :showBorder="true" />
      <CardProduct :showBorder="true" />
    </div>
    <div class="add-btn" @click="openProducts">
      <p>+</p>
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
  height: 50px;

  .search-bar {
    display: flex;
    background-color: @lightGray;
    border-radius: 6px;
    margin-bottom: 30px;

    img {
      padding: 13px 0 13px 13px;
    }

    input {
      background-color: @lightGray;
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

  .add-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: @green;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 32px;
    font-weight: 500;
    position: fixed;
    bottom: 50px;
    right: @margin-body-desktop;
  }
}
</style>
