<template>
  <div class="cart">
    <div class="cart-title">
      <img src="../assets/bag.svg" />
      <h1>Sua sacola de feira</h1>
    </div>
    <div class="cart-tickets">
      <CartTicket :products="products" :cartProducts="cartProducts"/>
    </div>
    <div class="cart-total">
      <h1>Total</h1>
      <h1>R$ {{ total.toFixed(2).replace(".", ",") }}</h1>
    </div>
  </div>
</template>

<script>
import CartTicket from "@/components/CartTicket.vue";
export default {
  name: "CartPayment",
  components: {
    CartTicket,
  },
  props: {
    products: Array,
    cartProducts: Array,
    total: Number
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.cart {
  background-color: @lightGray;
  padding: 40px;
  width: 100%;
  border-radius: 16px;

  &-title {
    display: flex;
    margin-bottom: 30px;

    h1 {
      font-size: 20px;
      margin-left: 10px;
    }
  }

  &-tickets {
    overflow-y: scroll;
    height: 450px;
    padding: 10px 5px 10px 0;
  }

  &-total {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    max-width: 400px;

    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 540px) {
    padding: 20px;
  }
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: @lightGray;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: @gray;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: @gray;
}
</style>
