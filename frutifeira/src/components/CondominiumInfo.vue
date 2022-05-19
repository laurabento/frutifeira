<template>
  <form @submit.prevent="saveInfo">
    <div class="form">
      <div class="form-name">
        <p>Nome do condomínio</p>
        <input type="text" v-model="condominium.name" />
      </div>
      <div class="form-email">
        <p>E-mail</p>
        <input type="text" v-model="condominium.email" />
      </div>
      <div class="form-tel">
        <p>Telefone</p>
        <input type="text" v-model="condominium.contact" />
      </div>
      <div class="form-cep">
        <p>CEP</p>
        <input type="text" v-model="condominium.cep" />
      </div>
      <div class="form-state">
        <p>Estado</p>
        <select name="" id="" v-model="condominium.state">
          <option value="SP" selected>São Paulo</option>
        </select>
      </div>
      <div class="form-city">
        <p>Cidade</p>
        <select v-model="condominium.city">
          <option value=""></option>
          <option v-for="city in cities" :key="city">{{ city }}</option>
        </select>
      </div>
      <div class="form-neighborhood">
        <p>Bairro</p>
        <input type="text" v-model="condominium.neighborhood" />
      </div>
      <div class="form-address">
        <p>Endereço</p>
        <input type="text" v-model="condominium.address" />
      </div>
      <div class="form-number">
        <p>Número</p>
        <input type="text" v-model="condominium.number" />
      </div>
      <div class="form-time">
        <p>Horário da feira</p>
        <input type="time" v-model="condominium.schedule" />
      </div>
      <div class="form-day">
        <p>Dia da semana</p>
        <select name="" id="" v-model="condominium.weekDay">
          <option value=""></option>
          <option value="sun">Domingo</option>
          <option value="mon">Segunda-feira</option>
          <option value="tue">Terça-feira</option>
          <option value="wed">Quarta-feira</option>
          <option value="thu">Quinta-feira</option>
          <option value="fri">Sexta-feira</option>
          <option value="sat">Sábado</option>
        </select>
      </div>
      <div class="form-button">
        <button>SALVAR</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import cities from "../assets/cities.json";
export default {
  async created() {
    this.condominium = await this.loadCondominium();
    this.cities = cities.cidades;
    console.log(this.condominium._id);
    console.log(localStorage.getItem("id"));
  },
  data() {
    return {
      condominium: Object,
      cities: Array,
    };
  },
  computed: {
    id() {
      return localStorage.getItem("id");
    },
  },
  methods: {
    async loadCondominium() {
      return axios
        .get("http://localhost:5000/api/v1.0/condominium/" + this.id, {
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
    async saveInfo() {
      await axios
        .post(
          "http://localhost:5000/api/v1.0/condominium/" + this.id,
          this.condominium,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
        .then((response) => {
          if (response.ok) {
            // this.openModalSuccess();
            console.log("condomínio atualizado!");
          }
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
    "time time day day"
    "button button button button";

  input,
  select {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 20px 15px;
    margin-top: 5px;
    width: 100%;
    cursor: text;
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
    cursor: pointer;
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
  &-button {
    grid-area: button;
    display: flex;
    justify-content: flex-end;

    button {
      background-color: @green;
      color: white;
      letter-spacing: 0.1em;
      font-weight: bold;
      border-radius: 6px;
      height: 50px;
      cursor: pointer;
      width: 100%;
      max-width: 380px;
      margin-top: 30px;
    }
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
      "day"
      "button";
  }

  @media (max-width: 425px) {
    margin-top: @margin-body-mobile;
  }
}
</style>
