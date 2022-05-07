<template>
  <div>
    <Header :UserCondominium="this.condominium" />
    <CondominiumArea />
  </div>
</template>

<script>
import CondominiumArea from "@/components/CondominiumArea.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Condominium",
  components: {
    CondominiumArea,
    Header,
  },
  data() {
    return {
      condominium: true,
    };
  },
};
</script>

<style></style>
