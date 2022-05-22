<template>
  <div>
    <Header />
    <PaymentArea :products="products" :cartProducts="cartProducts" :total="total" :condominium="condominium"/>
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
  data(){
    return {
      products: [],
      cartProducts: [],
      total: 0,
      condominium: []
    }
  },
  created() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.createList();
    this.total = this.cartTotal();
    this.loadCondominium();
  },
  methods: {
    createList() {
      var cart = [];
      this.products.forEach(function (product) {
        if (!cart.some((p) => p.stand_name === product.stand_name)) {
          cart.push({
            stand_name: product.stand_name,
            products: [product],
            total: parseFloat(product.price.replace(",", ".")),
          });
        } else {
          const index = cart.findIndex(
            (cartProduct) => cartProduct.stand_name == product.stand_name,
          );
          cart[index].products.push(product);
          cart[index].total += parseFloat(product.price.replace(",", "."));
        }
      });

      this.cartProducts = cart;
    },
    cartTotal() {
      var total = 0;
      this.cartProducts.forEach(function (product) {
        total += product.total;
      });

      return total;
    },
    async loadCondominium() {
      try {
        const getCondominium = JSON.parse(localStorage.getItem("condominium"));
        this.condominium = getCondominium
      } catch (error) {
        console.error("Not found Condominium");
      }
    },
  }
};
</script>

<style></style>
