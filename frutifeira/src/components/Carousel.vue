<template>
  <div class="carousel-group">
      <carousel 
        :perPageCustom="[[320, 1], [375, 1], [425, 2], [600, 3], [768, 4], [1024, 5], [1440, 7]]" 
        :loop="true"
        paginationColor="#f2f2f2" 
        paginationActiveColor="#5f5f5f">
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
          <slide>
              <div class="circle">
                  <label>Barraca da Meire</label>
              </div>
          </slide>
      </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide,
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.carousel-group {
    margin: @margin-body-desktop;

    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 157px;
        height: 157px;
        border-radius: 50%;
        padding: 30px;

        label {
            color: white;
            font-size: 22px;
            font-weight: 600;
            text-align: center;
        }
    }
}

.VueCarousel-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.VueCarousel-slide:nth-child(4n+1) .circle {
    background-color: @red;
}

.VueCarousel-slide:nth-child(4n+2) .circle {
    background-color: @yellow;
}

.VueCarousel-slide:nth-child(4n+3) .circle {
    background-color: @darkBlue;
}

.VueCarousel-slide:nth-child(4n+4) .circle {
    background-color: @green;
}

.VueCarousel-dot:focus {
  outline: 1px solid @green;
}

</style>