<template>
  <div class="payment">
    <div class="payment-return" @click="goBack">
      <img src="../assets/go-back-icon.svg" />
      <label>voltar</label>
    </div>
    <h1 class="payment-title">Finalize seu pedido</h1>
    <div class="payment-container">
      <div class="payment-content">
        <!-- <h1 class="payment-content-title">Finalize seu pedido</h1> -->
        <div class="payment-content-takeout">
          <h1>Retirada</h1>
          <TakeoutDetails :icon="'location'" :location="true" :condominium="condominium"/>
          <TakeoutDetails :icon="'time'" :location="false" />
        </div>
        <div class="payment-content-data">
          <h1>Pagamento</h1>
          <Payment :cartProducts="cartProducts" :condominium="condominium" :total="total"/>
        </div>
      </div>
      <div class="payment-cart">
        <CartPayment :products="products" :cartProducts="cartProducts" :total="total"/>
      </div>
    </div>
  </div>
</template>

<script>
import TakeoutDetails from "@/components/TakeoutDetails.vue";
import Payment from "@/components/Payment.vue";
import CartPayment from "@/components/CartPayment.vue";
export default {
  name: "PaymentArea",
  components: {
    TakeoutDetails,
    Payment,
    CartPayment,
  },
  props: {
    products: Array,
    cartProducts: Array,
    total: Number,
    condominium: Object,
  },
  methods: {
    goBack() {
        this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.payment {
  height: calc(100vh ~"-" @height-menu-desktop);
  width: 100%;
  position: fixed;
  top: @height-menu-desktop;
  background-color: white;
  z-index: 2;
  overflow: scroll;
  padding-right: @margin-body-desktop;
  padding-left: @margin-body-desktop;
  padding-bottom: @margin-body-desktop;

  &-return {
    display: flex;
    width: 100%;
    margin-top: @margin-body-desktop;
    align-items: center;
    cursor: pointer;

    label {
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
    }
  }

  &-title {
    color: @green;
    margin: 30px 0;
  }

  &-container {
    display: flex;
    justify-content: start;
    gap: 90px;
    .payment-content {
      display: flex;
      flex-direction: column;

      &-takeout {
        display: flex;
        flex-direction: column;
        gap: 15px;

        h1 {
          font-size: 22px;
        }
      }

      &-data {
        margin-top: 40px;

        h1 {
          font-size: 22px;
          margin-bottom: 20px;
        }
      }
    }
    .payment-cart {
      width: 100%;
      max-width: 480px;
    }
  }

  @media (max-width: 1100px) {
    &-container {
      gap: 30px;
    }
  }

  @media (max-width: 900px) {
    &-container {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 540px) {
    top: @height-menu-mobile;
    padding-right: @margin-body-mobile;
    padding-left: @margin-body-mobile;
    padding-bottom: @margin-body-mobile;
  }
}
</style>
