<template>
  <form id="formMarketerSave" @submit.prevent="saveMarketer">
    <div class="form">
      <div class="form-title">
        <h1>Criar conta</h1>
        <p>FEIRANTE</p>
      </div>
      <div class="form-name">
        <p>Nome</p>
        <input name="name" type="text" v-model="formData.name" required />
      </div>
      <div class="form-stand">
        <p>Nome da barraca</p>
        <input
          name="standName"
          type="text"
          v-model="formData.stand_name"
          required
        />
      </div>
      <div class="form-email">
        <p>E-mail</p>
        <input name="email" type="email" v-model="formData.email" required />
      </div>
      <div class="form-product">
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
      <div class="form-password">
        <p>Senha</p>
        <input
          name="firstPassword"
          type="password"
          v-model="firstPassword"
          required
        />
      </div>
      <div class="form-confirm">
        <p>Confirmar senha</p>
        <input
          name="secondPassword"
          type="password"
          v-model="secondPassword"
          required
        />
      </div>
      <div class="form-error" v-if="errorLabel">
        <label>As senhas não coincidem.</label>
      </div>
      <button id="saveMarketerButton">CRIAR</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
export default {
  name: "CreateMarketer",
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
        { name: "Pastel", code: "Pastel" },
        { name: "Verduras", code: "Verduras" },
      ],
      formData: {
        name: "",
        email: "",
        standName: "",
        password: "",
        product_type: [],
      },
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    hasPasswordEqual() {
      if (this.firstPassword == this.secondPassword) {
        this.errorLabel = false;
        return (this.formData.password = this.firstPassword);
      } else {
        this.errorLabel = true;
        return false;
      }
    },
    saveProductTypes(item) {
      this.formData.product_type.push(item.name);
    },
    async saveMarketer() {
      this.value.forEach(this.saveProductTypes);

      if (this.hasPasswordEqual()) {
        await axios
          .post("http://localhost:5000/api/v1.0/marketvendors", this.formData, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          .then(() => {
            // this.openModalSuccess();
            console.log("usuário cadastrado!");
            this.$router.push({ name: "LoginAdm" });
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";
@import "../assets/vue-multiselect.min.css";

.form {
  margin: @margin-body-desktop;
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-areas:
    "title title"
    "name stand"
    "email product"
    "password confirm"
    "error error"
    "button button";

  &-title {
    grid-area: title;
    margin-bottom: 45px;
    h1 {
      color: @green;
    }
    p {
      font-size: 20px;
      font-weight: bold;
      color: @gray;
    }
  }

  input {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 20px 15px;
    margin-top: 5px;
    width: 100%;
  }

  &-name {
    grid-area: name;
  }
  &-stand {
    grid-area: stand;
  }
  &-email {
    grid-area: email;
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
  &-error {
    grid-area: error;

    label {
      font-size: 12px;
      color: @red;
    }
  }

  button {
    grid-area: button;
    width: 100%;
    max-width: 375px;
    justify-self: center;
    background-color: @green;
    height: 50px;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin-top: 50px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "title"
      "name"
      "stand"
      "email"
      "product"
      "password"
      "confirm"
      "button";

    &-title {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 425px) {
    margin: @margin-body-mobile;

    button {
      margin-top: 20px;
    }
  }
}
</style>
