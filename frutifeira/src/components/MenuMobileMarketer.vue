<template>
  <div class="background">
    <div class="menu-mobile">
      <ul>
          <li>
              Produtos
          </li>
          <li>
              Feiras
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.background {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    justify-content: center;
    align-items: center;
    background-color: @black-50;
    overflow: hidden;
    top: @height-menu-mobile;

    .menu-mobile {
        height: auto;
        width: 100%;
        position: fixed;
        top: @height-menu-mobile;
        background-color: white;
        z-index: 2;
        overflow: scroll;
        box-shadow: 0px 30px 30px 7px #0000001a;

        ul {
            li {
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-size: 14px;
                padding: 25px;
                font-weight: 500;
                cursor: pointer;

                &:first-child {
                    border-bottom: 2px solid @lightGray;
                }
            }   
        }
    }
}

</style>