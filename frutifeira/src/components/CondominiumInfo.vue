<template>
  <div class="form">
    <div class="form-name">
      <p>Nome do condomínio</p>
      <input type="text" />
    </div>
    <div class="form-email">
      <p>E-mail</p>
      <input type="text" />
    </div>
    <div class="form-tel">
      <p>Telefone</p>
      <input type="text" />
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
    <div class="form-time">
      <p>Horário da feira</p>
      <input type="text" />
    </div>
    <div class="form-day">
      <p>Dia da semana</p>
      <select name="" id=""></select>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.loadCondominium();
  },
  methods: {
    async loadCondominium() {
      await axios
        .get("http://localhost:5000/api/v1.0/condominium", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer" + localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.form {
  display: grid;
  margin-top: @margin-body-desktop;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "name name email email"
    "tel cep state state"
    "city city neighborhood neighborhood"
    "address address address number"
    "time time day day";

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
    padding: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Some browsers will not display the caret when using calc, so we put the fallback first */
    background: url("../assets/chevron-down.svg") @lightGray no-repeat 98.5% !important; /* !important used for overriding all other customisations */
    background: url("../assets/chevron-down.svg") @lightGray no-repeat
      calc(100% - 15px) !important; /* Better placement regardless of input width */
  }

  &-name {
    grid-area: name;
  }
  &-email {
    grid-area: email;
  }
  &-tel {
    grid-area: tel;
  }
  &-cep {
    grid-area: cep;
  }
  &-state {
    grid-area: state;
  }
  &-city {
    grid-area: city;
  }
  &-neighborhood {
    grid-area: neighborhood;
  }
  &-address {
    grid-area: address;
  }
  &-number {
    grid-area: number;
  }
  &-time {
    grid-area: time;
  }
  &-day {
    grid-area: day;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "email"
      "tel"
      "cep"
      "state"
      "city"
      "neighborhood"
      "address"
      "number"
      "time"
      "day";
  }

  @media (max-width: 425px) {
    margin-top: @margin-body-mobile;
  }
}
</style>
