<template>
  <div class="table-group">
    <table>
      <tr>
        <th v-for="item in table" :key="item">
          {{ item }}
        </th>
        <th></th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>
          {{ item.name }}
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
        <td v-if="type === 'solicitation'" class="text-center">
          {{ item.status == "" ? "-" : item.status }}
        </td>
        <td v-if="type === 'solicitation'" class="text-center">
          {{ item.approvalDate == "" ? "-" : item.approvalDate }}
        </td>
        <td
          class="dots"
          v-if="type !== 'cSolicitations' && type !== 'marketVendors'"
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
  },
  async created() {
    this.items = await this.loadItems();
    console.log(this.items);
  },
  data() {
    return {
      itemsProducts: ["Alface Mimosa Hidropônica", "300g", "Não", "R$ 4,39"],
      items: [],
    };
  },
  methods: {
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
