<template>
  <div class="background">
    <div class="modal">
      <div class="modal-header">
        <h1>Crie uma conta</h1>
        <img src="../assets/close-gray.svg" @click="openSignUp" />
      </div>
      <form id="formUserSave" @submit.prevent="saveUser">
        <div class="modal-form">
          <div class="modal-form-nome">
            <p>Nome</p>
            <input
              id="inputNomeCadastro"
              name="name"
              type="text"
              v-model="firstName"
              @change="concatName"
              required
            />
          </div>
          <div class="modal-form-sobrenome">
            <p>Sobrenome</p>
            <input
              id="inputSobrenomeCadastro"
              name="surname"
              type="text"
              v-model="lastName"
              @change="concatName"
              required
            />
          </div>
          <div class="modal-form-email">
            <p>E-mail</p>
            <input
              id="inputEmailCadastro"
              name="email"
              type="email"
              v-model="formData.email"
              required
            />
          </div>
          <div class="modal-form-tel">
            <p>Telefone</p>
            <input
              id="inputFoneCadastro"
              name="phone"
              type="tel"
              v-model="formData.phone"
              required
            />
          </div>
          <div class="modal-form-cpf">
            <p>CPF</p>
            <input
              id="inputCPFCadastro"
              name="cpf"
              type="text"
              v-model="formData.cpf"
              required
            />
          </div>
          <div class="modal-form-senha">
            <p>Senha</p>
            <input
              id="inputSenhaCadastro"
              name="firstPassword"
              type="password"
              v-model="firstPassword"
              required
            />
          </div>
          <div class="modal-form-conf">
            <p>Confirmar senha</p>
            <input
              id="inputConfirmSenhaCadastro"
              name="secondPassword"
              type="password"
              v-model="secondPassword"
              required
            />
          </div>
          <div class="modal-form-error" v-if="errorLabel">
            <label>As senhas não coincidem.</label>
          </div>
          <button id="saveUserButton" class="modal-form-button">CRIAR</button>
          <p class="modal-form-info">
            Já possui uma conta? <span @click="openLogin">Entre aqui!</span>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errorLabel: false,
      firstPassword: "",
      secondPassword: "",
      firstName: "",
      lastName: "",
      formData: {
        name: "",
        email: "",
        phone: "",
        cpf: "",
        password: "",
      },
    };
  },
  methods: {
    openSignUp() {
      this.$emit("openSignUp");
    },
    openLogin() {
      this.$emit("openLogin");
      this.$emit("openSignUp");
    },
    concatName() {
      return (this.formData.name = this.firstName.concat(" ", this.lastName));
    },
    hasPasswordEqual() {
      if (this.firstPassword == this.secondPassword) {
        return (this.formData.password = this.firstPassword);
      } else {
        this.errorLabel = true;
        return false;
      }
    },
    async saveUser() {
      if (this.hasPasswordEqual()) {
        await axios
          .post(
            "http://frutifeira.us-east-1.elasticbeanstalk.com/api/v1.0/users",
            this.formData,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                //Authorization: "Bearer " + access token
              },
            },
          )
          .then(() => {
            this.openLogin();
          })
          .catch((error) => console.log(error));
      }
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
  z-index: 5;
  justify-content: center;
  align-items: center;
  background-color: @black-50;
  overflow: none;

  .modal {
    width: 100%;
    max-width: 900px;
    margin: @margin-body-desktop;
    height: auto;
    background-color: white;
    padding: 50px;
    position: relative;
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
        "error error"
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

      &-error {
        grid-area: error;

        label {
          font-size: 12px;
          color: @red;
        }
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

  @media (max-width: 425px) {
    display: block;
    position: inherit;
    background-color: transparent;
    overflow: hidden;
    z-index: 2;

    .modal {
      margin: (@height-menu-mobile - 1px) 0 0 0;
      z-index: 2;
      position: fixed;
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
