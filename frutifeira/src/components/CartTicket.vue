<template>
  <div class="ticket">
    <div class="ticket-item">
      <h1>Barraca da Meire</h1>
      <div class="item-group" v-for="product in products" :key="product.id">
        <div class="item-group_product">
          <div class="item-group_quant">
            <label>{{ product.quantidade }}</label>
          </div>
          <label>{{ product.nomeProduto }}</label>
        </div>
        <div class="item-group_product2">
          <label>R$ {{ product.preco }}</label>
          <img src="../assets/close-gray.svg" />
        </div>
      </div>
      <div class="item-total">
        <label>Total</label>
        <label>R$ 10,29</label>
      </div>
    </div>
    <div class="separator">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    quantidade: "3",
    nomeProduto: "Maçã Verde",
    preco: "4,99",
  },
  {
    id: 2,
    quantidade: "1",
    nomeProduto: "Banana Prata",
    preco: "5,90",
  },
];

export default {
  data() {
    return {
      products: products,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";
.ticket {
  &-item {
    background-color: white;
    padding: 30px;
    border-radius: 16px;
    margin-top: -10px;

    h1 {
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .item-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      &_product {
        display: flex;
        align-items: center;

        label {
          font-weight: 600;
        }
      }
      &_quant {
        background-color: @lightGreen;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-right: 20px;

        label {
          font-weight: 700;
          color: @green;
        }
      }
      &_product2 {
        display: flex;
        justify-content: center;
        align-items: center;

        label {
          margin-right: 30px;
        }

        img {
          cursor: pointer;
        }
      }
    }

    .item-total {
      display: flex;
      justify-content: space-between;
      padding: 0 55px 0 50px;

      label {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  .separator {
    display: flex;
    justify-content: space-between;
    top: -6px;
    position: relative;
    padding: 0 16px;

    .circle {
      height: 10px;
      width: 10px;
      background-color: @lightGray;
      border-radius: 50%;
    }
  }

  @media (max-width: 540px) {
    &-item {
      padding: 20px;
    }
  }
}
</style>
