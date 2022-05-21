<template>
  <div>
    <Table
      :table="table"
      :type="'solicitation'"
      @openModalConfirmation="openModalConfirmation"
    />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  name: "MarketSolicitations",
  components: {
    Table,
  },
  methods: {
    openModalConfirmation(value) {
      this.$emit("openModalConfirmation", value);
    },
  },
  data() {
    return {
      table: [
        "Condomínio",
        "Dia da semana",
        "Horário",
        "Status",
        "Data aprovação",
      ],
    };
  },
};
</script>

<style></style>
