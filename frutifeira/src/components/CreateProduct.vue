<template>
  <div class="form">
    <div class="form-name">
      <p>Nome</p>
      <input type="text" />
    </div>
    <div class="form-type">
      <p>Tipo</p>
      <select name="" id=""></select>
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
      <div class="radio">
        <input type="radio" name="weight" />
        <p>Gramas</p>
      </div>
      <div class="radio">
        <input type="radio" name="weight" />
        <p>Kilo</p>
      </div>
    </div>
    <div class="form-img">
      <p>Imagem</p>
      <input type="file" />
    </div>
    <div class="form-discount">
      <p>Desconto</p>
      <input type="text" />
      <span>%</span>
    </div>
    <button>SALVAR</button>
  </div>
</template>

<script>
export default {
  name: "CreateProduct",
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

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

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    input:after {
      content: "";
      border: 1px solid @green;
      width: 20px;
      height: 20px;
      position: relative;
    }
  }
}
</style>
