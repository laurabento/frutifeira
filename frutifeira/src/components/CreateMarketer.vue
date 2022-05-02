<template>
  <div class="form">
    <div class="form-title">
      <h1>Criar conta</h1>
      <p>FEIRANTE</p>
    </div>
    <div class="form-name">
      <p>Nome</p>
      <input type="text" />
    </div>
    <div class="form-stand">
      <p>Nome da barraca</p>
      <input type="text" />
    </div>
    <div class="form-email">
      <p>E-mail</p>
      <input type="email" />
    </div>
    <div class="form-product">
      <p>Tipos de produto</p>
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
    "title title"
    "name stand"
    "email product"
    "password confirm"
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
