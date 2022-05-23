<template>
  <form @submit.prevent="updateUser">
    <div class="background">
      <div class="return" @click="openClientProfile">
        <img src="../assets/go-back-icon.svg" />
        <label>voltar</label>
      </div>
      <h1>PERFIL</h1>
      <div class="card">
        <div class="card-subtitle">DADOS GERAIS</div>
        <div class="card-name">
          <p>Nome</p>
          <input type="text" v-model="firstName" />
        </div>
        <div class="card-lastname">
          <p>Sobrenome</p>
          <input type="text" v-model="lastName" @change="concatName" />
        </div>
        <div class="card-email">
          <p>E-mail</p>
          <input type="email" v-model="formData.email" />
        </div>
        <div class="card-tel">
          <p>Telefone</p>
          <input type="text" v-model="formData.phone" />
        </div>
        <div class="card-cpf">
          <p>CPF</p>
          <input type="text" v-model="formData.cpf" />
        </div>
        <div class="card-subtitle2">TROCAR SENHA</div>
        <div class="card-password">
          <p>Senha</p>
          <input type="password" v-model="firstPassword" />
        </div>
        <div class="card-confirm">
          <p>Confirmar senha</p>
          <input type="password" v-model="secondPassword" />
        </div>
        <div class="form-error" v-if="errorLabel">
          <label>As senhas não coincidem.</label>
        </div>
        <button class="card-button">SALVAR</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "ClientProfile",
  props: {
    client: Object,
  },
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
        password: "",
        phone: "",
        cpf: "",
      },
    };
  },
  created() {
    this.formData = this.client;
    const name = this.formData.name;
    this.lastName = name.split(" ")[1];
    this.firstName = name.split(" ")[0];
  },
  methods: {
    concatName() {
      return (this.formData.name = this.firstName.concat(" ", this.lastName));
    },
    hasPasswordEqual() {
      if (this.firstPassword != "" && this.secondPassword != "") {
        if (this.firstPassword == this.secondPassword) {
          this.errorLabel = false;
          return (this.formData.password = this.firstPassword);
        } else {
          this.errorLabel = true;
          return false;
        }
      }

      return true;
    },
    openClientProfile() {
      return this.$emit("openClientProfile");
    },
    async updateUser() {
      if (this.hasPasswordEqual()) {
        await axios
          .patch(
            "http://frutifeira.us-east-1.elasticbeanstalk.com/api/v1.0/users/" +
              localStorage.getItem("id"),
            this.formData,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            },
          )
          .then(() => {
            location.reload();
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
  position: fixed;
  background-color: @lightGray;
  overflow-y: hidden;
  overflow: scroll;
  width: 100%;
  height: 100vh;
  z-index: 2;
  margin-top: @height-menu-desktop;
  padding-bottom: 100px;

  h1 {
    color: @green;
    margin-left: @margin-body-desktop;
    margin-top: @margin-body-desktop;
  }
  .return {
    display: flex;
    width: fit-content;
    margin-top: @margin-body-desktop;
    margin-left: @margin-body-desktop;
    align-items: center;
    cursor: pointer;

    label {
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: 600;
      color: @darkGray;
      cursor: pointer;
    }
  }

  .card {
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "subtitle subtitle subtitle"
      "name lastname lastname"
      "email tel cpf"
      "subtitle2 subtitle2 subtitle2"
      "password confirm confirm"
      "button button button";
    margin: @margin-body-desktop;
    background-color: white;
    border-radius: 16px;
    padding: 40px;

    input {
      background-color: @lightGray;
      height: 50px;
      border-radius: 6px;
      padding: 20px 15px;
      margin-top: 5px;
      width: 100%;
      overflow-y: hidden;
    }

    &-subtitle,
    &-subtitle2 {
      color: @green;
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 20px;
    }

    &-subtitle {
      grid-area: subtitle;
    }
    &-subtitle2 {
      grid-area: subtitle2;
    }
    &-name {
      grid-area: name;
    }
    &-lastname {
      grid-area: lastname;
    }

    &-email {
      grid-area: email;
      margin-bottom: 20px;
    }
    &-tel {
      grid-area: tel;
    }
    &-cpf {
      grid-area: cpf;
    }
    &-password {
      grid-area: password;
    }
    &-confirm {
      grid-area: confirm;
    }
    &-button {
      grid-area: button;
      background-color: @green;
      height: 50px;
      color: white;
      font-weight: bold;
      letter-spacing: 0.1em;
      border-radius: 6px;
      width: 100%;
      max-width: 480px;
      margin-top: 40px;
      justify-self: flex-end;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    margin-top: @height-menu-mobile;

    .card {
      grid-template-columns: 1fr;
      grid-template-areas:
        "subtitle"
        "name"
        "lastname"
        "email"
        "tel"
        "cpf"
        "subtitle2"
        "password"
        "confirm"
        "button";
      margin: @margin-body-mobile;
    }
  }
}
</style>
