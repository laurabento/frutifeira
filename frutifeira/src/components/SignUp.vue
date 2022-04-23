<template>
  <div class="background">
    <div class="modal">
      <div class="modal-header">
        <h1>Crie uma conta</h1>
        <img src="../assets/close-gray.svg" @click="openSignUp" />
      </div>
      <div class="modal-form">
        <div class="modal-form-nome">
          <p>Nome</p>
          <input type="text" />
        </div>
        <div class="modal-form-sobrenome">
          <p>Sobrenome</p>
          <input type="text" />
        </div>
        <div class="modal-form-email">
          <p>E-mail</p>
          <input type="email" />
        </div>
        <div class="modal-form-tel">
          <p>Telefone</p>
          <input type="tel" />
        </div>
        <div class="modal-form-cpf">
          <p>CPF</p>
          <input type="text" />
        </div>
        <div class="modal-form-senha">
          <p>Senha</p>
          <input type="password" />
        </div>
        <div class="modal-form-conf">
          <p>Confirmar senha</p>
          <input type="password" />
        </div>
        <button class="modal-form-button">CRIAR</button>
        <p class="modal-form-info">
          Já possui uma conta? <span>Entre aqui!</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSignUp() {
      this.$emit("openSignUp");
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
    width: 100%;
    max-width: 900px;
    margin: @margin-body-desktop;
    background-color: white;
    padding: 50px;
    position: fixed;
    border-radius: 16px;
    overflow-y: none;
    box-shadow: -4px 1px 15px 0px #0000001a;

    &-header {
      h1 {
        font-size: 24px;
        margin-bottom: 40px;
      }

      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        position: absolute;
        top: 25px;
        right: 25px;
        align-self: flex-end;
      }
    }

    &-form {
      display: grid;
      grid-template-areas:
        "nome sobrenome"
        "email email"
        "tel cpf"
        "senha conf"
        "button button"
        "info info";
      column-gap: 20px;
      row-gap: 20px;

      p {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        height: 50px;
        border-radius: 6px;
        padding: 16px;
        background-color: @lightGray;
      }

      &-nome {
        grid-area: nome;
      }
      &-sobrenome {
        grid-area: sobrenome;
      }
      &-email {
        grid-area: email;

        input {
          width: 100%;
        }
      }
      &-tel {
        grid-area: tel;
      }
      &-cpf {
        grid-area: cpf;
      }
      &-senha {
        grid-area: senha;
      }
      &-conf {
        grid-area: conf;
      }

      &-button {
        width: 100%;
        background-color: @green;
        color: white;
        font-weight: bold;
        letter-spacing: 0.1em;
        padding: 16px;
        text-align: center;
        border-radius: 6px;
        margin: 10px 0 10px 0;
        grid-area: button;
        justify-self: center;
        cursor: pointer;
      }

      &-info {
        grid-area: info;
        justify-self: center;
        text-align: center;

        p {
          font-size: 14px;
          font-weight: 500;
        }

        span {
          font-weight: bold;
          color: @green;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 425px) {
    display: block;
    position: inherit;
    background-color: transparent;
    overflow: hidden;

    .modal {
      margin: (@height-menu-mobile - 1px) 0 0 0;
      z-index: 2;
      box-shadow: none;
      height: calc(100% ~"-" @height-menu-mobile);
      border-radius: 0;
      padding: 40px @margin-body-mobile 40px @margin-body-mobile;

      &-header {
        img {
          top: 40px;
        }
      }

      &-form {
        overflow-y: scroll;
        height: calc(100% ~"-" @height-menu-mobile);
        grid-template-areas:
          "nome"
          "sobrenome"
          "email"
          "tel"
          "cpf"
          "senha"
          "conf"
          "button"
          "info";
      }
    }
  }
}
</style>
