<template>
  <div class="form">
    <div class="form-type">
      <div class="form-type-field">
        <input type="radio" />
        <p>Cartão de débito</p>
      </div>
      <div class="form-type-field">
        <input type="radio" />
        <p>Cartão de crédito</p>
      </div>
    </div>
    <input class="form-card" type="text" placeholder="Número do cartão" />
    <input
      class="form-name"
      type="text"
      placeholder="Nome impresso do cartão"
    />
    <input class="form-expire" type="text" placeholder="Validade" />
    <input class="form-cvv" type="text" placeholder="CVV" />
    <input class="form-cpf" type="text" placeholder="CPF do titular" />
    <div class="form-checkbox">
      <input type="checkbox" />
      <p>Desejo inserir CPF na nota</p>
    </div>
    <button class="form-btn">Fazer pedido</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.form {
  display: grid;
  width: 100%;
  max-width: 780px;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "type type type type"
    "card card name name"
    "expire cvv cpf cpf"
    "checkbox checkbox checkbox checkbox"
    "btn btn btn btn";

  &-type {
    display: flex;
    grid-area: type;
    gap: 90px;

    &-field {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }

  &-card {
    grid-area: card;
  }
  &-name {
    grid-area: name;
  }
  &-expire {
    grid-area: expire;
  }
  &-cvv {
    grid-area: cvv;
  }
  &-cpf {
    grid-area: cpf;
  }
  &-checkbox {
    grid-area: checkbox;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &-btn {
    grid-area: btn;
    justify-self: flex-end;
    background-color: @green;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1em;
    padding: 16px;
    border-radius: 6px;
    width: 100%;
    max-width: 380px;
    cursor: pointer;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "type type"
      "card card"
      "name name"
      "cpf cpf"
      "expire cvv"
      "checkbox checkbox"
      "btn btn";

    &-type {
      justify-content: space-between;
    }

    &-btn {
      max-width: none;
    }
  }
}
</style>
