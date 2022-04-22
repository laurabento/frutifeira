<template>
  <div class="background">
    <div class="modal">
      <div class="modal-header">
        <h1>Bem-vindo ao</h1>
        <img class="logo" src="../assets/logo-frutifeira.svg" />
        <img
          class="close"
          src="../assets/close-gray.svg"
          alt="Fechar"
          @click="openLogin"
        />
      </div>
      <div class="modal-input">
        <p>E-mail</p>
        <input type="email" placeholder="Digite seu e-mail" />
      </div>
      <div class="modal-input">
        <p>Senha</p>
        <input type="password" placeholder="Digite sua senha" />
      </div>
      <button class="modal-button">ENTRAR</button>
      <div class="modal-info">
        <p>Não possui conta? <span>Crie aqui!</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openLogin() {
      this.$emit("openLogin");
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
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: @white-50;
  overflow: none;

  .modal {
    width: 490px;
    height: auto;
    position: fixed;
    z-index: 2;
    background-color: white;
    border-radius: 16px;
    box-shadow: -4px 1px 15px 0px #0000001a;
    padding: 50px;
    margin: 0 auto;

    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      h1 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 5px;
      }

      .logo {
        width: 160px;
      }

      .close {
        width: 24px;
        height: 24px;
        cursor: pointer;
        position: absolute;
        top: 25px;
        right: 25px;
        align-self: flex-end;
      }
    }

    &-input {
      margin-bottom: 25px;

      p {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        height: 50px;
        background-color: @lightGray;
        border-radius: 6px;
        padding: 15px;
      }
    }

    &-button {
      width: 100%;
      height: 50px;
      background-color: @green;
      border-radius: 6px;
      color: white;
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-bottom: 30px;
      cursor: pointer;
    }

    &-info {
      font-size: 14px;
      font-weight: 500;
      text-align: center;

      span {
        color: @green;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .modal {
      width: 340px;
      padding: 35px;
      font-size: 12px;

      &-header {
        h1 {
          font-size: 18px;
        }

        .logo {
          width: 140px;
        }
      }
    }
  }
}
</style>
