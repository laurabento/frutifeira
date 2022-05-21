<template>
  <div class="background">
    <div class="modal">
      <img id="clickFecharProduto"
        class="modal-close"
        src="../assets/close-gray.svg"
        alt="fechar"
        @click="openDetails"
      />
      <img class="modal-img" :src="product.img" />
      <div class="modal-content">
        <div class="modal-content-header">
          <p>{{ product.marketVendorName }}</p>
          <h1>{{ product.name }}</h1>
          <span>{{ this.productUnit(product) }}</span>
        </div>
        <p>
         {{product.description}}
        </p>
        <div class="modal-content-amount">
          <img id="clickAumentarProduto"
            class="modal-content-amount-remove"
            @click="addRemoveAmount(false)"
            src="../assets/remove.svg"
          />
          <p>{{ this.amount }}</p>
          <img
            class="modal-content-amount-add"
            @click="addRemoveAmount(true)"
            src="../assets/add.svg"
          />
        </div>
        <button id="btnAdicionarProduto" class="modal-content-button">
          <p>Adicionar</p>
          <p>R$ {{ productPrice(product) }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product: Object,
  },
  data() {
    return {
      amount: 1,
    }
  },
  methods: {
    openDetails() {
      this.$emit("openDetails");
    },
    addRemoveAmount(add) {
      if (add) {
        this.amount += 1;
      } else if (this.amount > 1) {
        this.amount -= 1;
      }
    },
    productUnit(item) {
      if(item.unit == "U")
        return "unidade"
      if(item.unit == "K")
        return item.quantity + " kilo"
      if(item.unit == "G")
        return item.quantity + " gramas"
    },
    productPrice(item){
      return (parseFloat(this.amount * item.finalPrice).toFixed(2)).toString().replace(".", ",")
    }
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.background {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  justify-content: center;
  align-items: center;
  background-color: @black-50;
  overflow: hidden;

  .modal {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 990px;
    background-color: white;
    border-radius: 16px;
    padding: 50px;
    box-shadow: -4px 1px 15px 0px #0000001a;
    margin: @margin-body-desktop;

    &-close {
      position: absolute;
      top: 25px;
      right: 25px;
      cursor: pointer;
    }

    &-img {
      width: 400px;
      height: 400px;
      object-fit: cover;
      border-radius: 16px;
      border: 3px solid @lightGray;
      padding: 40px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      width: 100%;
      justify-content: space-between;

      &-header {
        margin-bottom: 25px;
        h1 {
          font-size: 32px;
          margin: 5px 0 5px 0;
        }

        p {
          text-transform: uppercase;
        }
      }

      &-amount {
        display: flex;
        justify-content: flex-end;
        margin-top: 65px;

        p {
          font-size: 18px;
          font-weight: bold;
          margin: 0 20px 0 20px;
        }

        img {
          cursor: pointer;
          width: 24px;
          height: 24px;
          border: none;
        }
        // &-add {
        //   background-color: transparent;
        //   background-image: url("../assets/add.svg");
        // }
        &-add:hover {
          background-image: url("../assets/add-green.svg");
        }
        // &-remove {
        //   background-image: url("../assets/remove.svg");
        // }
        &-remove:hover {
          background-image: url("../assets/remove-green.svg");
        }
      }

      &-button {
        display: flex;
        align-self: flex-end;
        margin-top: 25px;
        padding: 19px 21px;
        background-color: white;
        border: 2px solid @green;
        border-radius: 6px;
        color: @green;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        p:first-of-type {
          margin-right: 50px;
        }

        &:hover {
          background-color: @green;
          color: white;
        }
      }
    }

    @media (max-width: 860px) {
      &-img {
        width: 300px;
        height: 300px;
      }
    }

    @media (max-width: 790px) {
      display: flex;
      height: calc(100% ~"-" @height-menu-desktop);
      flex-direction: column;
      align-items: center;
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 40px;

      &-close {
        top: 15px;
        right: 15px;
      }

      &-img {
        margin-bottom: 30px;
      }

      &-content {
        margin: 0;
        &-amount {
          margin-top: 45px;
        }
      }
    }

    @media (max-width: 425px) {
      padding: @margin-body-mobile;

      &-img {
        width: 260px;
        margin-top: 20px;
      }

      &-content {
        p {
          font-size: 12px;
        }
        &-header {
          h1 {
            font-size: 24px;
          }
        }

        &-amount {
          p {
            font-size: 14px;
          }
          margin-top: 20px;
        }

        &-button {
          padding: 15px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
