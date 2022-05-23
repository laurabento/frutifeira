<template>
  <div class="cart">
    <!-- <div class="cart-close">
          <img src="../assets/close-gray.svg"/>
      </div> -->
    <div class="cart-title">
      <img src="../assets/bag.svg" />
      <h1>Sua sacola de feira</h1>
    </div>
    <div class="cart-items">
      <div v-for="stand in cartProducts" :key="stand.stand_name">
        <div class="cart-items_item">
          <h1>{{ stand.stand_name }}</h1>
          <div
            class="item-group"
            v-for="product in stand.products"
            :key="product.id"
          >
            <div class="item-group_product">
              <div class="item-group_quant">
                <label>{{ product.amount }}</label>
              </div>
              <label>{{ product.name }}</label>
            </div>
            <div class="item-group_product2">
              <label>R$ {{ product.price }}</label>
              <img
                src="../assets/close-gray.svg"
                @click="deleteProduct(product.id, stand.stand_name)"
              />
            </div>
          </div>
          <div class="item-total">
            <label>Total</label>
            <label>R$ {{ stand.total.toFixed(2).replace(".", ",") }}</label>
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
    </div>
    <div class="cart-total">
      <h1>Total</h1>
      <h1 id="totalCarrinho">R$ {{ total.toFixed(2).replace(".", ",") }}</h1>
    </div>
    <button @click="goToPayment">Finalizar compra</button>
  </div>
</template>

<script>
export default {
  created() {
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.createList();
    this.total = this.cartTotal();
  },
  data() {
    return {
      products: [],
      cartProducts: [],
      total: 0,
    };
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
    deleteProduct(id) {
      var cart = JSON.parse(localStorage.getItem("cart"));
      cart = cart.filter(function (el) {
        return el.id != id;
      });
      localStorage.setItem("cart", JSON.stringify(cart));

      this.forceRender();
    },
    forceRender() {
      this.$emit("forceRender");
    },
    goToPayment() {
      if (localStorage.getItem("accessToken") !== null) {
        if (localStorage.getItem("cart").length > 2)
          this.$router.push({ name: "Pagamento" });
      } else {
        this.$emit("openLogin");
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.cart {
  background-color: @lightGray;
  width: 505px;
  height: calc(100% ~"-" @height-menu-desktop);
  position: fixed;
  margin-top: @height-menu-desktop;
  z-index: 3;
  right: 0;
  box-shadow: -35px 0px 30px -35px rgba(0, 0, 0, 0.25);
  padding: @margin-body-desktop;

  &-title {
    display: flex;
    margin-bottom: 30px;

    h1 {
      font-size: 20px;
      margin-left: 10px;
    }
  }

  &-items {
    overflow-y: scroll;
    height: 75%;
    padding: 10px 5px 10px 0;
    &_item {
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

      .item-group:last-child {
        margin-bottom: unset;
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
  }

  &-total {
    display: flex;
    position: absolute;
    justify-content: space-between;
    width: 425px;
    margin-top: 10px;

    h1 {
      font-size: 24px;
    }
  }

  button {
    position: relative;
    background-color: @green;
    color: white;
    border-radius: 6px;
    padding: 16px;
    font-weight: bold;
    letter-spacing: 0.1em;
    width: 100%;
    margin-top: 55px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: calc(100% ~"-" @height-menu-mobile);
    margin-top: @height-menu-mobile;
    padding: @margin-body-mobile;

    &-title {
      h1 {
        font-size: 18px;
      }
    }
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
