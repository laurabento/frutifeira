<template>
  <div class="form">
    <div class="form-name">
      <p>Nome</p>
      <input type="text" />
    </div>
    <div class="form-type">
      <p>Tipo</p>
      <multiselect
        v-model="value"
        tag-placeholder="Adicionar tipo"
        placeholder="Procurar ou adicionar tipo"
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
      <input type="text" />
    </div>
    <div class="form-price">
      <p>Preço</p>
      <input type="text" />
    </div>
    <div class="form-qnt">
      <p>Quantidade</p>
      <div class="form-qnt-field">
        <input type="text" />
        <span>g</span>
      </div>
    </div>
    <div class="form-unity">
      <input type="checkbox" />
      <p>Por unidade</p>
    </div>
    <div class="form-weight">
      <div class="form-weight-radio">
        <input type="radio" name="weight" />
        <p>Gramas</p>
      </div>
      <div class="form-weight-radio">
        <input type="radio" name="weight" />
        <p>Kilo</p>
      </div>
    </div>
    <div class="form-img">
      <p>Imagem</p>
      <div class="form-img-field" @click="chooseImage()">
        <input type="file" id="selectImg" />
        <img src="../assets/shift.svg" alt="" />
      </div>
    </div>
    <div class="form-discount">
      <p>Desconto</p>
      <div class="form-discount-field">
        <input type="text" />
        <span>%</span>
      </div>
    </div>
    <button>SALVAR</button>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "CreateProduct",
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      options: [
        { name: "Frutas", code: "fr" },
        { name: "Legumes", code: "le" },
        { name: "Pastel", code: "pa" },
      ],
    };
  },
  methods: {
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
  },
};
</script>
<style lang="less" scoped>
@import "../assets/variables.less";
@import "../assets/vue-multiselect.min.css";

.form {
  display: grid;
  margin-top: @margin-body-desktop;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name type"
    "description description"
    "price qnt"
    "unity weight"
    "img discount"
    "button button";

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
  select {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 20px 15px;
    margin-top: 5px;
    width: 100%;
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
    background: url("../assets/chevron-down.png") @lightGray no-repeat 98.5% !important; /* !important used for overriding all other customisations */
    background: url("../assets/chevron-down.png") @lightGray no-repeat
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
