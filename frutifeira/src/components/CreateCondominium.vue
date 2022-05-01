<template>
  <div class="form">
    <div class="form-title">
      <h1>Criar conta</h1>
      <p>CONDOMÍNIO</p>
    </div>
    <div class="form-name">
      <p>Nome</p>
      <input type="text" />
    </div>
    <div class="form-email">
      <p>E-mail</p>
      <input type="email" />
    </div>
    <div class="form-cep">
      <p>CEP</p>
      <input type="text" />
    </div>
    <div class="form-state">
      <p>Estado</p>
      <select name="" id=""></select>
    </div>
    <div class="form-city">
      <p>Cidade</p>
      <select name="" id=""></select>
    </div>
    <div class="form-neighborhood">
      <p>Bairro</p>
      <input type="text" />
    </div>
    <div class="form-address">
      <p>Endereço</p>
      <input type="text" />
    </div>
    <div class="form-number">
      <p>Número</p>
      <input type="text" />
    </div>
    <div class="form-tel">
      <p>Telefone</p>
      <input type="text" />
    </div>
    <div class="form-password">
      <p>Senha</p>
      <input type="password" />
    </div>
    <div class="form-confirm">
      <p>Confirmar senha</p>
      <input type="password" />
    </div>
    <button>CRIAR</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";
.form {
  margin: @margin-body-desktop;
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-areas:
    "title title title title"
    "name name email email"
    "cep state city neighborhood"
    "address address number tel"
    "password password confirm confirm"
    "button button button button";

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

  input,
  select {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 20px 15px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
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

  &-name {
    grid-area: name;
  }
  &-email {
    grid-area: email;
  }
  &-city {
    grid-area: city;
  }
  &-state {
    grid-area: state;
  }
  &-number {
    grid-area: number;
  }
  &-neighborhood {
    grid-area: neighborhood;
  }
  &-cep {
    grid-area: cep;
  }
  &-tel {
    grid-area: tel;
  }
  &-address {
    grid-area: address;
  }
  &-password {
    grid-area: password;
  }
  &-confirm {
    grid-area: confirm;
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
      "email"
      "cep"
      "state"
      "city"
      "neighborhood"
      "address"
      "number"
      "tel"
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
