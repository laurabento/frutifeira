<template>
  <div class="card">
    <img src="../assets/location.svg" alt="" />
    <div class="card-content">
      <h1>Nome do condomínio</h1>
      <p>Endereço do condomínio</p>
    </div>
    <div :class="changeIcon(isOpen)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    changeIcon(isOpen) {
      return !isOpen ? "open-icon" : "close-icon";
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card {
  .open-icon {
    background: url("../assets/chevron-down.svg");
    height: 24px;
    width: 24px;
    transition: all 0.25s;
    transform: rotate(0);
  }

  .close-icon {
    background: url("../assets/chevron-up.svg");
    height: 24px;
    width: 24px;
    transition: all 0.25s;
    transform: rotate(90deg);
  }
}
</style>
