<template>
  <form @submit.prevent="login">
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
          <input
            id="modalLoginEmail"
            type="email"
            placeholder="Digite seu e-mail"
            v-model="formData.email"
          />
        </div>
        <div class="modal-input">
          <p>Senha</p>
          <input
            id="modalLoginSenha"
            type="password"
            placeholder="Digite sua senha"
            v-model="formData.password"
          />
        </div>
        <div class="form-error" v-if="errorLabel">
          <label>{{ this.errorMessage }}</label>
        </div>
        <button id="btnModalEntrar" class="modal-button">ENTRAR</button>
        <div class="modal-info">
          <p>Não possui conta? <span @click="openSignUp">Crie aqui!</span></p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      errorLabel: false,
      errorMessage: "",
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    openLogin() {
      this.$emit("openLogin");
    },
    openSignUp() {
      this.$emit("openSignUp");
      this.$emit("openLogin");
    },
    async login() {
      await axios
        .post(
          `http://frutifeira.us-east-1.elasticbeanstalk.com/api/v1.0/users/login`,
          this.formData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        )
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then((response_json) => {
          if (response_json.status === "200") {
            console.log(response_json.data);
            this.errorLabel = false;
            localStorage.setItem("accessToken", response_json.accessToken);
            localStorage.setItem("userType", response_json.userType);
            localStorage.setItem("id", response_json.id);
            this.openLogin();
          } else {
            this.errorMessage = response_json.error;
            this.errorLabel = true;
          }
        })
        .catch(() => {
          this.errorMessage = "E-mail ou senha incorretos.";
          this.errorLabel = true;
        });
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

  .form-error {
    margin-top: -25px;
    margin-bottom: 25px;
    label {
      font-size: 12px;
      color: @red;
    }
  }

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
