<template>
  <div>
    <Table
      :type="'marketOrders'"
      :table="table"
      :condominiumId="condominiumId"
    />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  name: "MarketOrders",
  components: {
    Table,
  },
  props: {
    condominiumId: String,
  },
  data() {
    return {
      table: [
        "Número",
        "Data compra",
        "Data agendada",
        "Pagamento",
        "Status",
        "Valor",
      ],
    };
  },
};
</script>

<style></style>
