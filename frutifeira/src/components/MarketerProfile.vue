<template>
  <form @submit.prevent="updateMarketer">
    <div class="background">
      <div class="return" @click="openMarketerProfile">
        <img src="../assets/go-back-icon.svg" />
        <label>voltar</label>
      </div>
      <h1>PERFIL</h1>
      <div class="card">
        <div class="card-subtitle">DADOS GERAIS</div>
        <div class="card-name">
          <p>Nome</p>
          <input type="text" v-model="formData.name" />
        </div>
        <div class="card-standName">
          <p>Nome da barraca</p>
          <input type="text" v-model="formData.stand_name" />
        </div>
        <div class="card-email">
          <p>E-mail</p>
          <input type="email" v-model="formData.email" />
        </div>
        <div class="card-product">
          <p>Tipos de produto</p>
          <multiselect
            name="productType"
            v-model="value"
            tag-placeholder=""
            placeholder=""
            label="name"
            track-by="code"
            :options="options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>
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
import Multiselect from "vue-multiselect";
import axios from "axios";
export default {
  name: "MarketerProfile",
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      product_type: [],
      errorLabel: false,
      firstPassword: "",
      secondPassword: "",
      options: [
        { name: "Frutas", code: "Frutas" },
        { name: "Legumes", code: "Legumes" },
        { name: "Verduras", code: "Verduras" },
        { name: "Pastel", code: "Pastel" },
      ],
      formData: {
        name: "",
        email: "",
        stand_name: "",
        password: "",
        product_type: [],
      },
    };
  },
  async created() {
    this.formData = await this.loadMarketer();
    this.formData.product_type.forEach((item) => {
      this.value.push({ name: item, code: item });
    });
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag,
      };
      this.options.push(tag);
      this.value.push(tag);
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
    saveProductTypes(item) {
      this.formData.product_type.push(item.name);
    },
    openMarketerProfile() {
      return this.$emit("openMarketerProfile");
    },
    async loadMarketer() {
      return axios
        .get(
          "http://localhost:5000/api/v1.0/marketvendors/" +
            localStorage.getItem("id"),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
        .then((response) => {
          return response;
        })
        .then((response_json) => {
          return response_json.data;
        })
        .catch((error) => console.log(error));
    },
    async updateMarketer() {
      this.formData.product_type = [];
      this.value.forEach(this.saveProductTypes);
      if (this.hasPasswordEqual()) {
        await axios
          .patch(
            "http://localhost:5000/api/v1.0/marketvendors/" +
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
            console.log("usuário atualizado!");
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
  width: 100%;
  height: 100%;
  z-index: 2;
  margin-top: -10px;

  h1 {
    color: @green;
    margin-left: @margin-body-desktop;
    margin-top: @margin-body-desktop;
  }
  .return {
    display: flex;
    width: 100%;
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
    grid-template-areas:
      "subtitle subtitle"
      "name standName"
      "email product"
      "subtitle2 subtitle2"
      "password confirm"
      "button button";
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
    &-standName {
      grid-area: standName;
    }

    &-email {
      grid-area: email;
      margin-bottom: 20px;
    }
    &-product {
      grid-area: product;

      p {
        margin-bottom: 5px;
      }
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
}
</style>
