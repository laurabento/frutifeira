<template>
  <div>
    <Header />
    <PaymentArea />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PaymentArea from "@/components/PaymentArea.vue";
export default {
  name: "Payment",
  components: {
    Header,
    PaymentArea,
  },
};
</script>

<style></style>
