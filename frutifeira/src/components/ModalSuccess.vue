<template>
  <div class="background">
    <div class="modal">
      <img class="modal-img" src="../assets/success.svg" />
      <h1>Pedido realizado</h1>
      <p>
        Assim que o pagamento for confirmado, começaremos a preparar o seu
        pedido!
      </p>
      <div class="modal-button">
        <!-- <button>Seus pedidos</button> -->
        <button @click="goHome">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSuccess",
  methods: {
    goHome() {
      localStorage.removeItem("cart");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.background {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 6;
  justify-content: center;
  align-items: center;
  background-color: @black-50;
  overflow: hidden;

  .modal {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 50px;
    border-radius: 16px;
    position: relative;
    align-items: center;

    p {
      text-align: center;
      width: 85%;
    }

    &-close {
      position: absolute;
      top: 25px;
      right: 25px;
    }

    &-img {
      width: 150px;
      height: 150px;
    }

    h1 {
      font-weight: 400;
      margin: 10px;
    }

    &-button {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 30px;
      margin-top: 50px;
      button {
        background-color: @green;
        color: white;
        font-weight: bold;
        letter-spacing: 0.1em;
        height: 50px;
        border-radius: 6px;
        width: 100%;
        max-width: 200px;
        cursor: pointer;
      }
    }
  }
}
</style>
