<template>
  <form @submit.prevent="saveProduct">
    <div class="form">
      <div class="form-name">
        <p>Nome</p>
        <input id="nomeProduto" type="text" v-model="formData.name" />
      </div>
      <div class="form-type">
        <p>Tipo</p>
        <multiselect
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
      <div class="form-description">
        <p>Descrição</p>
        <textarea
          id="descricaoProduto"
          rows="2"
          type="text"
          v-model="formData.description"
        />
      </div>
      <div class="form-price">
        <p>Preço</p>
        <input id="precoProduto" type="text" v-model="formData.price" />
      </div>
      <div class="form-qnt">
        <p>Quantidade</p>
        <div class="form-qnt-field">
          <input id="qtdProduto" type="text" v-model="formData.quantity" />
          <span id="weight"></span>
        </div>
      </div>
      <div class="form-weight">
        <div class="form-weight-radio">
          <input
            id="radioUnidadeProduto"
            type="radio"
            name="weight"
            value="U"
            @change="changeWeight('u')"
            v-model="formData.unit"
          />
          <p>Por unidade</p>
        </div>
        <div class="form-weight-radio">
          <input
            id="radioGramasProduto"
            type="radio"
            name="weight"
            value="G"
            @change="changeWeight('g')"
            v-model="formData.unit"
          />
          <p>Gramas</p>
        </div>
        <div class="form-weight-radio">
          <input
            id="radioKiloProduto"
            type="radio"
            name="weight"
            value="K"
            @change="changeWeight('kg')"
            v-model="formData.unit"
          />
          <p>Kilo</p>
        </div>
      </div>
      <div class="form-img">
        <p>Imagem</p>
        <!-- <div class="form-img-field" @click="chooseImage()"> -->
        <input type="text" id="selectImg" v-model="formData.img" />
        <!-- <img src="../assets/shift.svg" alt="" /> -->
        <!-- </div> -->
      </div>
      <div class="form-discount">
        <p>Desconto</p>
        <div class="form-discount-field">
          <input id="descontoProduto" type="text" v-model="formData.discount" />
          <span>%</span>
        </div>
      </div>
      <button id="btnSalvarProduto">SALVAR</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
export default {
  name: "CreateProduct",
  props: {
    edit: Boolean,
    editProduct: String,
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      options: [
        { name: "Fruta", code: "Fruta" },
        { name: "Legume", code: "Legume" },
        { name: "Pastel", code: "Pastel" },
        { name: "Verdura", code: "Verdura" },
      ],
      formData: {
        name: "",
        product_type: [],
        description: "",
        price: "",
        unit: "",
        quantity: "",
        img: "",
        discount: "",
        marketVendorId: "",
      },
    };
  },
  async created() {
    if (this.edit) {
      this.formData = await this.loadProduct();
      this.formData.product_type.forEach((item) => {
        this.value.push({ name: item, code: item });
      });
    }
  },
  methods: {
    changeWeight(type) {
      document.getElementById("qtdProduto").disabled = type === "u";

      if (type !== "u") {
        document.getElementById("qtdProduto").classList.remove("disabled");
        document.getElementById("weight").innerHTML = type;
      } else document.getElementById("qtdProduto").classList.add("disabled");
    },
    chooseImage() {
      document.getElementById("selectImg").click();
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    saveProductTypes(item) {
      this.formData.product_type.push(item.name);
    },
    async saveProduct() {
      this.value.forEach(this.saveProductTypes);
      const id = localStorage.getItem("id");
      this.formData.marketVendorId = id;
      if (!this.edit) {
        await axios
          .post("http://localhost:5000/api/v1.0/products", this.formData, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          })
          .then(() => {
            console.log("produto cadastrado!");
            location.reload();
          })
          .catch((error) => console.log(error));
      } else {
        await axios
          .patch(
            "http://localhost:5000/api/v1.0/products/" + this.editProduct,
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
            console.log("produto atualizado!");
            location.reload();
          })
          .catch((error) => console.log(error));
      }
    },
    async loadProduct() {
      return axios
        .get("http://localhost:5000/api/v1.0/products/" + this.editProduct, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          return response;
        })
        .then((response_json) => {
          return response_json.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style lang="less" scoped>
@import "../assets/variables.less";
@import "../assets/vue-multiselect.min.css";

.form {
  display: grid;
  margin: @margin-body-desktop;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name type"
    "description description"
    "price qnt"
    "weight weight"
    "img discount"
    "button button";

  .disabled {
    cursor: not-allowed;
  }

  &-name {
    grid-area: name;
  }
  &-type {
    grid-area: type;

    p {
      margin-bottom: 5px;
    }
  }
  &-description {
    grid-area: description;
  }
  &-price {
    grid-area: price;
  }
  &-qnt {
    grid-area: qnt;
  }
  &-unity {
    grid-area: unity;
  }
  &-img {
    grid-area: img;
  }
  &-weight {
    grid-area: weight;
  }
  &-discount {
    grid-area: discount;
  }

  button {
    grid-area: button;
  }

  input,
  select,
  textarea {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 20px 15px;
    margin-top: 5px;
    width: 100%;
    overflow-y: hidden;
  }

  textarea {
    height: auto;
  }

  /*For IE*/
  select::-ms-expand {
    display: none;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Some browsers will not display the caret when using calc, so we put the fallback first */
    background: url("../assets/chevron-down.svg") @lightGray no-repeat 98.5% !important; /* !important used for overriding all other customisations */
    background: url("../assets/chevron-down.svg") @lightGray no-repeat
      calc(100% - 15px) !important; /* Better placement regardless of input width */
  }

  &-qnt {
    &-field {
      display: flex;
      width: 100%;
      align-items: flex-end;
      input {
        border-radius: 6px 0 0 6px;
      }
      span {
        background-color: @lightGray;
        padding: 16px;
        height: 50px;
        border-radius: 0 6px 6px 0;
        color: @gray;
      }
    }
  }

  &-unity,
  &-weight {
    display: flex;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 10px;
    }

    &-radio {
      display: flex;
      align-items: center;
    }
  }

  &-weight {
    gap: 90px;
  }

  &-img {
    &-field {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
      cursor: pointer;

      input {
        padding: 15px 0 0 15px;
        border-radius: 0 6px 6px 0;
        color: @gray;
      }

      img {
        background-color: @lightGray;
        border-radius: 6px 0 0 6px;
        padding: 16px 0 16px 16px;
      }
    }
  }

  input[type="file"]::file-selector-button {
    display: none;
  }

  &-discount {
    &-field {
      display: flex;
      width: 100%;
      align-items: flex-end;
      input {
        border-radius: 6px 0 0 6px;
      }

      span {
        background-color: @lightGray;
        padding: 16px;
        height: 50px;
        border-radius: 0 6px 6px 0;
        color: @gray;
      }
    }
  }

  button {
    width: 100%;
    background-color: @green;
    color: white;
    padding: 16px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 30px;
    letter-spacing: 0.1em;
    grid-column-start: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "type"
      "description"
      "price"
      "qnt"
      "unity"
      "weight"
      "img"
      "discount"
      "button";
  }

  @media (max-width: 425px) {
    margin-top: @margin-body-mobile;
  }
}
</style>
