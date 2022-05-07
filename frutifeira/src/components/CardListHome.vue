<template>
  <div class="card-home-list">
    <h1>{{ this.titleList }}</h1>
    <carousel 
        :perPageCustom="[[320, 1], [375, 1], [425, 1], [580, 2], [890, 3], [1024, 3], [1440, 5]]" 
        :loop="true"
        paginationColor="#f2f2f2" 
        paginationActiveColor="#5f5f5f">
          <slide>
              <Card @openDetails="openDetails" />
          </slide>
          <slide>
              <Card @openDetails="openDetails" />
          </slide>
          <slide>
              <Card @openDetails="openDetails" />
          </slide>
          <slide>
              <Card @openDetails="openDetails" />
          </slide>
          <slide>
              <Card @openDetails="openDetails" />
          </slide>
      </carousel>
    <!-- <div class="card-home-list_items">
      <Card @openDetails="openDetails" />
      <Card @openDetails="openDetails" />
      <Card @openDetails="openDetails" />
      <Card @openDetails="openDetails" />
      <Card @openDetails="openDetails" />
    </div> -->
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { Carousel, Slide } from 'vue-carousel';


export default {
  components: {
    Card,
    Carousel,
    Slide,
  },
  props: {
    titleList: String,
  },
  methods: {
    openDetails() {
      this.$emit("openDetails");
    },
  },
};
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

  @media (max-width: 1100px) {
    &_items {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 800px) {
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

.VueCarousel-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
