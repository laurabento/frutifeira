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
        <td>
          {{ item.weekDay }}
        </td>
        <td>
          {{ item.schedule }}
        </td>
        <td class="text-center">
          {{ item.status == null ? "-" : item.status }}
        </td>
        <td class="text-center">
          {{ item.approvalDate == null ? "-" : item.approvalDate }}
        </td>
        <td class="dots">
          <img src="../assets/new.svg" @click="openDetails" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    table: Array,
    type: String,
  },
  async created() {
    this.items = await this.loadItems();
  },
  data() {
    return {
      itemsProducts: ["Alface Mimosa Hidropônica", "300g", "Não", "R$ 4,39"],
      itemsMarkets: [
        "Condomínio 1",
        "Segunda-feira",
        "19:30 - 21:30",
        "29/03/2022",
      ],
      items: [],
    };
  },
  methods: {
    openDetails() {
      if (!this.products) this.$emit("openMarketDetails");
    },
    async loadItems() {
      const id = localStorage.getItem("id");
      return axios
        .get(
          "http://localhost:5000/api/v1.0/marketcondominium/feirante/" + id,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
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
          cursor: pointer;
        }
      }
    }
  }
}
</style>
