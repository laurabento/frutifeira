<template>
  <div class="table-group">
    <table>
      <tr>
        <th
          v-for="item in this.products ? tableProducts : tableMarkets"
          :key="item"
        >
          {{ item }}
        </th>
      </tr>
      <tr>
        <td
          v-for="item in this.products ? itemsProducts : itemsMarkets"
          :key="item"
        >
          {{ item }}
        </td>
        <td class="dots">
          <img src="../assets/dots.svg" @click="openDetails" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    products: Boolean,
  },
  data() {
    return {
      tableProducts: ["Nome do produto", "Quantidade", "Unidade", "Preço", ""],
      tableMarkets: ["Condomínio", "Dia da semana", "Hora", "Próximo dia", ""],
      itemsProducts: ["Alface Mimosa Hidropônica", "300g", "Não", "R$ 4,39"],
      itemsMarkets: [
        "Condomínio 1",
        "Segunda-feira",
        "19:30 - 21:30",
        "29/03/2022",
      ],
    };
  },
  methods: {
    openDetails() {
      if (!this.products) this.$emit("openMarketDetails");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

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
