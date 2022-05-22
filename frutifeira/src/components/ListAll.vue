<template>
  <div class="list">
    <div class="list-group">
      <Card
        v-for="item in productsCondominium"
        :key="item.name"
        :item="item"
        @openDetails="openDetails(item)"
      />
      <h1 v-if="productsCondominium.length == 0">
        Não existem produtos nessa categoria!
      </h1>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
  },
  props: {
    productsCondominium: Array,
  },
  created() {
    console.log(this.productsCondominium);
  },
  methods: {
    openDetails(item) {
      this.$emit("openDetails", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.list {
  h1 {
    color: @green;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
  }

  &-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 13px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-left: @margin-body-desktop;
    margin-right: @margin-body-desktop;
    // justify-content: center;

    @media (max-width: 768px) {
      margin-left: @margin-body-mobile;
      margin-right: @margin-body-mobile;
    }
  }
}
</style>
