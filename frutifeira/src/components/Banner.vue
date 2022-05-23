<template>
  <div class="banner-home">
      <img class="banner-home_desktop" src="../assets/new-banner-desktop.jpg"/>
      <img class="banner-home_mobile" src="../assets/new-banner-mobile.jpg"/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.banner-home {
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;

    &_desktop {
        display: flex;
        width: 100%;
        margin-top: 40px;
        border-radius: 16px;
        object-fit: cover;
    }

    &_mobile {
        display: none;
        width: 100%;
        margin-top: 30px;
        border-radius: 16px;
        object-fit: cover;
    }

    @media (max-width: 600px) {
        padding-right: @margin-body-mobile;
        padding-left: @margin-body-mobile;

        &_desktop {
            display: none;
        }

        &_mobile {
            display: flex;
        }
    }
}

</style>