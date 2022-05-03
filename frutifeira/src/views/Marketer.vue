<template>
  <div class="marketer">
    <Header :UserMarketer="this.marketer"/>
    <MarketerArea />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MarketerArea from "@/components/MarketerArea.vue";

export default {
  name: "Marketer",
  components: {
    MarketerArea,
    Header
  },
  data() {
    return {
      marketer: true,
    }
  }
};
</script>

<style></style>
