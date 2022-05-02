<template>
  <div class="card" @click="openDetails">
    <div class="card-img">
      <div class="flag">
        <label>%</label>
      </div>
      <img src="../assets/green-apple.jpg" />
    </div>
    <div class="card-info">
      <div class="card-info_title">
        <span>Barraca da Meire</span>
        <label>Maçã Verde</label>
      </div>
      <div class="card-info_price">
        <span class="original-price">R$ 1,40</span>
        <label class="price red">R$ 1,20</label>
        <span class="price-info">unidade</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openDetails() {
      this.$emit("openDetails");
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
      }

      .price-info {
        font-weight: 400;
        font-size: 10px;
      }
    }
  }
}
</style>
