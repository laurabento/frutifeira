<template>
  <div class="card-home-list">
      <h1> {{ this.titleList }}</h1>
      <div class="card-home-list_items">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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
        titleList: String,
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card-home-list {
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;
    margin-top: 40px;
    margin-bottom: 40px;

    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.06em;
        color: @green;
        margin-bottom: 40px;
    }

    &_items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
    }

    @media (max-width: 768px) {
        padding-left: @margin-menu-mobile;
        padding-right: @margin-menu-mobile;

        h1 {
            font-size: 24px;
        }
        
        &_items {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 520px) {
        &_items {
            grid-template-columns: 1fr;
        }
    }
}

</style>