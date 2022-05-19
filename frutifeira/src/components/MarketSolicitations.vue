<template>
  <div>
    <Table :table="table" :type="'solicitation'" />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  components: {
    Table,
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
