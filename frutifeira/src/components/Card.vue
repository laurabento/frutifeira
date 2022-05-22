<template>
  <div class="card" id="clickProduto" @click="openDetails">
    <div class="card-img">
      <div class="flag" v-if="item.discount">
        <label>%</label>
      </div>
      <img :src="item.img" />
    </div>
    <div class="card-info">
      <div class="card-info_title">
        <span>{{ item.stand_name }}</span>
        <label>{{ item.name }}</label>
      </div>
      <div class="card-info_price">
        <span v-if="item.discount" class="original-price"
          >R$
          {{
            parseFloat(item.price).toFixed(2).toString().replace(".", ",")
          }}</span
        >
        <label :class="hasDiscountColor(item)"
          >R$
          {{
            parseFloat(item.finalPrice).toFixed(2).toString().replace(".", ",")
          }}</label
        >
        <span class="price-info">{{ this.productUnit(item) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    openDetails() {
      this.$emit("openDetails");
    },
    hasDiscountColor(item) {
      return item.discount ? "price red" : "price green";
    },
    productUnit(item) {
      if (item.unit == "U") return "unidade";
      if (item.unit == "K") return item.quantity + " kilo";
      if (item.unit == "G") return item.quantity + " gramas";
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card {
  background-color: @lightGray;
  height: auto;
  border-radius: 16px;
  cursor: pointer;
  width: 260px;

  &-img {
    display: flex;
    justify-content: end;

    .flag {
      position: absolute;
      z-index: 1;
      width: 28px;
      height: 45px;
      background: @red;
      border-radius: 0 0 6px 6px;
      display: flex;
      justify-content: center;
      align-items: end;
      margin-right: 20px;

      label {
        color: white;
        font-weight: 700;
        margin-bottom: 8px;
      }
    }

    img {
      position: relative;
      width: 100%;
      object-fit: contain;
      height: 164px;
      background-color: white;
      border: 3px solid #f2f2f2;
      border-radius: 16px 16px 0 0;
    }
  }

  &-info {
    padding: 20px;

    &_title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 25px;

      span {
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
      }

      label {
        font-weight: 700;
        font-size: 26px;
      }
    }

    &_price {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      .original-price {
        text-decoration-line: line-through;
        font-weight: 400;
      }

      .price {
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
      }

      .red {
        color: @red;
      }

      .green {
        color: @green;
        padding-top: 17.5px;
      }

      .price-info {
        font-weight: 400;
        font-size: 10px;
      }
    }
  }
}
</style>
