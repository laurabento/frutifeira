<template>
  <div class="card">
    <div class="card-content">
      <img :src="require(`@/assets/${icon}.svg`)" alt="" />
      <div class="card-content-title">
        <h1>{{ location ? condominium.name : condominium.weekDay + ", " + condominium.schedule }}</h1>
        <p v-if="location">{{ condominium.address }} - {{ condominium.city }}, {{ condominium.state }}</p>
      </div>
    </div>
    <!-- <p class="card-btn">{{ location ? "Trocar" : "Agendar" }}</p> -->
  </div>
</template>

<script>
export default {
  name: "TakeoutDetails",
  props: {
    icon: String,
    location: Boolean,
    condominium: Object
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card {
  display: flex;
  background-color: @lightGray;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 20px 30px 20px 15px;
  width: 100%;
  max-width: 780px;

  &-content {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }

    &-title {
      h1,
      p {
        font-size: 16px;
      }
    }
  }

  &-btn {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
