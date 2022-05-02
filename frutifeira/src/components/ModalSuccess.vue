<template>
  <div class="background">
    <div class="modal">
      <img class="modal-close" src="../assets/close-gray.svg" />
      <img class="modal-img" src="../assets/success.svg" />
      <h1>Pedido realizado</h1>
      <p>
        Assim que o pagamento for confirmado, começaremos a preparar o seu
        pedido!
      </p>
      <div class="modal-buttons">
        <button>Veja seu QR Code</button>
        <button>Acompanhe seu pedido</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.background {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
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
  }
}
</style>
