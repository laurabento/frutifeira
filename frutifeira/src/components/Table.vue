<template>
  <div class="table-group">
    <div class="search-field" v-if="type !== 'marketOrders'">
      <div class="search-field-input">
        <img src="../assets/search-gray.svg" alt="" />
        <input
          type="text"
          placeholder="O que você procura?"
          @change="find($event)"
          @keyup="find($event)"
        />
      </div>
    </div>
    <div class="search-orders" v-if="type === 'marketOrders'">
      <div class="search-orders-field">
        <p>Número do pedido</p>
        <div class="search-field-input">
          <img src="../assets/search-gray.svg" alt="" />
          <input
            type="text"
            @change="findOrder($event, 'order')"
            @keyup="findOrder($event, 'order')"
          />
        </div>
      </div>
      <div class="search-orders-field">
        <p>Forma de pagamento</p>
        <select
          name=""
          id=""
          @change="findOrder($event, 'payment')"
          @keyup="findOrder($event, 'payment')"
        >
          <option value=""></option>
          <option value="C">Cartão de crédito</option>
          <option value="D">Cartão de débito</option>
        </select>
      </div>
      <div class="search-orders-field">
        <p>Status do pedido</p>
        <select
          name=""
          id=""
          @change="findOrder($event, 'status')"
          @keyup="findOrder($event, 'payment')"
        >
          <option value=""></option>
          <option value="Pendente">Pendente</option>
          <option value="Aprovado">Aprovado</option>
          <option value="Em separação">Em separação</option>
          <option value="Pronto">Pronto</option>
          <option value="Aguardando retirada">Aguardando retirada</option>
          <option value="Entregue">Entregue</option>
        </select>
      </div>
    </div>
    <table>
      <tr>
        <th v-for="item in table" :key="item">
          {{ item }}
        </th>
        <th></th>
      </tr>
      <tr v-for="item in itemsSearch" :key="item.id">
        <td v-if="type !== 'marketOrders'">
          {{ item.name }}
        </td>
        <td v-if="type === 'marketOrders'">
          {{ item.orderNumber }}
        </td>
        <td v-if="type === 'marketOrders'">
          {{ new Date(item.orderDate).toLocaleDateString("pt-br") }}
        </td>
        <td v-if="type === 'marketOrders'">
          {{ item.scheduling.weekDay + " " + item.scheduling.schedule }}
        </td>
        <td v-if="type === 'marketOrders'">
          {{
            item.payment.typeCredit === "D"
              ? "Cartão de crédito"
              : "Cartão de débito"
          }}
        </td>
        <td v-if="type === 'marketOrders'">
          <select
            name=""
            id=""
            v-model="item.status"
            @change="changeStatus($event, item._id)"
          >
            <option value=""></option>
            <option value="Pendente">Pendente</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Em separação">Em separação</option>
            <option value="Pronto">Pronto</option>
            <option value="Aguardando retirada">Aguardando retirada</option>
            <option value="Entregue">Entregue</option>
          </select>
          <!-- {{ item.status }} -->
        </td>
        <td v-if="type === 'marketOrders'">
          {{ "R$ " + item.totalPrice.toFixed(2).replace(".", ",") }}
        </td>
        <td v-if="type === 'marketVendors'">
          {{ item.stand_name }}
        </td>
        <td v-if="type === 'markets'">
          {{ item.weekDay }}
        </td>
        <td v-if="type === 'markets'">
          {{ item.schedule }}
        </td>
        <td v-if="type === 'cSolicitations' || type === 'marketVendors'">
          <span v-for="(pType, index) in item.product_type" :key="pType">
            {{ index == item.product_type.length - 1 ? pType : pType + ", " }}
          </span>
        </td>
        <td v-if="type === 'cSolicitations'">
          {{ item.status }}
        </td>
        <td v-if="type === 'products'">
          {{ item.unit === "U" ? "-" : item.quantity }}
        </td>
        <td v-if="type === 'products'">
          {{
            item.unit === "K"
              ? "Kilo"
              : item.unit === "G"
              ? "Gramas"
              : "Por unidade"
          }}
        </td>
        <td v-if="type === 'products'">
          {{ "R$ " + item.finalPrice.toFixed(2) }}
        </td>
        <td v-if="type === 'solicitation'">
          {{ item.weekDay }}
        </td>
        <td v-if="type === 'solicitation'">
          {{ item.schedule }}
        </td>
        <td v-if="type === 'solicitation'">
          {{ item.status == "" ? "-" : item.status }}
        </td>
        <td v-if="type === 'solicitation'">
          {{ item.approvalDate == "" ? "-" : item.approvalDate }}
        </td>
        <td
          class="dots"
          v-if="
            type !== 'cSolicitations' &&
            type !== 'marketVendors' &&
            type !== 'marketOrders'
          "
        >
          <img src="../assets/new.svg" @click="openModal(item._id)" />
        </td>
        <td class="buttons" v-if="type === 'cSolicitations'">
          <img
            :src="
              require(`../assets/${
                item.status === 'Aprovado'
                  ? 'check-fill.svg'
                  : 'check-small.svg'
              }`)
            "
            alt=""
            @click="
              item.status !== 'Aprovado'
                ? openModal(item._id, 'aprovar', item.marketCondominiumId)
                : null
            "
          />
          <img
            v-if="item.status !== 'Aprovado'"
            :src="
              require(`../assets/${
                item.status === 'Reprovado' ? 'cancel-fill.svg' : 'cancel.svg'
              }`)
            "
            alt=""
            @click="openModal(item._id, 'reprovar', item.marketCondominiumId)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Table",
  props: {
    table: Array,
    type: String,
    condominiumId: String,
  },
  async created() {
    this.items = this.itemsSearch = await this.loadItems();
  },
  data() {
    return {
      itemsProducts: ["Alface Mimosa Hidropônica", "300g", "Não", "R$ 4,39"],
      items: [],
      itemsSearch: [],
      searchTerm: "",
      status: "",
    };
  },
  methods: {
    async changeStatus(event, id) {
      this.status =
        event.target && event.target.value ? event.target.value.trim() : null;

      const order = {
        status: this.status,
      };
      await axios
        .patch("http://localhost:5000/api/v1.0/orders/" + id, order, {
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
    openModal(id, option, mcId) {
      if (this.type === "solicitation") {
        localStorage.setItem("cId", id);
        this.$emit("openModalConfirmation", 1);
      } else if (this.type === "markets") {
        localStorage.setItem("cId", id);
        this.$emit("openMarketDetails");
      } else if (this.type === "cSolicitations") {
        localStorage.setItem("fId", id);
        localStorage.setItem("mcId", mcId);
        this.$emit("openModalConfirmation", option === "aprovar" ? 2 : 3);
      } else if (this.type === "products") {
        this.$emit("openEditProduct", id);
      }
    },
    async loadItems() {
      const id = localStorage.getItem("id");
      const url =
        this.type === "solicitation"
          ? "marketcondominium/feirante/" + id
          : this.type === "markets"
          ? "marketcondominium/feirante/" + id + "/aprovado"
          : this.type === "products"
          ? "products/feirante/" + id
          : this.type === "cSolicitations" || this.type === "marketVendors"
          ? "marketcondominium/condominio/" + id
          : this.type === "marketOrders"
          ? "orders/feirante/" + id + "/condominio/" + this.condominiumId
          : "";
      return axios
        .get("http://localhost:5000/api/v1.0/" + url, {
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
    findOrder(event, type) {
      this.searchTerm =
        event.target && event.target.value ? event.target.value.trim() : null;

      if (this.searchTerm) {
        if (type === "order") {
          this.itemsSearch = this.items.filter((d) =>
            d.orderNumber
              .toString()
              .toLowerCase()
              .includes(this.searchTerm.toString().toLowerCase()),
          );
        } else if (type === "payment") {
          this.itemsSearch = this.items.filter((d) =>
            d.payment
              .toString()
              .toLowerCase()
              .includes(this.searchTerm.toString().toLowerCase()),
          );
        } else {
          this.itemsSearch = this.items.filter((d) =>
            d.status
              .toString()
              .toLowerCase()
              .includes(this.searchTerm.toString().toLowerCase()),
          );
        }
      }

      if (this.searchTerm && this.searchTerm.lenght <= 3) {
        this.itemsSearch = this.items;
      }

      if (!this.searchTerm) {
        this.itemsSearch = this.items;
      }
    },
    find() {
      this.searchTerm =
        event.target && event.target.value ? event.target.value.trim() : null;

      if (this.searchTerm) {
        this.itemsSearch = this.items.filter((d) =>
          d.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
        );
      }

      if (this.searchTerm && this.searchTerm.lenght <= 3) {
        this.itemsSearch = this.items;
      }

      if (!this.searchTerm) {
        this.itemsSearch = this.items;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.text-center {
  text-align: center;
}

// .table-group table tr th {
//   text-align: center;
// }

.search-orders {
  display: flex;
  gap: 20px;
  width: 100%;

  input,
  select {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 16px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
  }

  &-field {
    width: 100%;
    &-input {
      display: flex;
      align-items: center;
      background-color: @lightGray;
      border-radius: 6px;
      margin-top: 5px;
      cursor: text;

      input {
        margin: 0;
        cursor: text;
      }

      img {
        margin: 13px 0 13px 13px;
        width: 24px;
        height: 24px;
      }
    }
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
}
.search-field {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: @margin-body-desktop;

  input,
  select {
    background-color: @lightGray;
    height: 50px;
    border-radius: 6px;
    padding: 16px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
  }

  &-input {
    display: flex;
    align-items: center;
    background-color: @lightGray;
    border-radius: 6px;
    margin-top: 5px;
    cursor: text;
    width: 100%;

    input {
      margin: 0;
      cursor: text;
    }

    img {
      margin: 13px 0 13px 13px;
      width: 24px;
      height: 24px;
    }
  }
}
.table-group {
  table {
    width: 100%;
    margin-top: 40px;

    tr {
      th {
        border-bottom: 1px solid @gray;
        padding: 10px 0;
        text-align: start;
        color: @darkGray;
      }

      td {
        border-bottom: 1px solid @gray;
        padding: 10px 0;
        color: @darkGray;
      }

      select {
        background-color: @lightGray;
        height: 40px;
        border-radius: 6px;
        padding: 11px;
        margin-top: 5px;
        cursor: pointer;
      }

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

      .dots {
        text-align: end;

        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }

      .buttons {
        display: flex;
        gap: 20px;
        img {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
