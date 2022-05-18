<template>
  <div class="list">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    components: {
        Card,
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 60px;
    margin-left: @margin-body-desktop;
    margin-right: @margin-body-desktop;

    @media (max-width: 768px) {
        margin-left: @margin-body-mobile;
        margin-right: @margin-body-mobile;
    }
}

</style>