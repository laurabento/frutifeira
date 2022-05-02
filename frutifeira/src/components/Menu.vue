<template>
  <div class="menu">
      <div class="menu-items">
          <div class="menu-items_item">
              <h1>Perfil</h1>
              <p>Aqui você pode acessar seu perfil, alterar dados e senhas.</p>
          </div>
          <div class="menu-items_item" @click="openOrder">
              <h1>Pedidos</h1>
              <p>Aqui você pode acompanhar e rever seus pedidos</p>
          </div>
          <div class="menu-items_logout">
              <h1>Sair</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        openOrder() {
            this.$emit("openOrder");
        },
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.menu {
    width: 495px;
    height: auto;
    position: fixed;
    z-index: 2;
    background-color: white;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 30px 30px 7px #0000001a;
    right: @margin-body-desktop;
    margin-top: @height-menu-desktop;

    &-items {
        &_item {
            border-bottom: 2px solid @lightGray;
            padding: 20px;
            cursor: pointer;

            h1 {
                font-size: 14px;
                color: @green;
                text-transform: uppercase;
            }
        }

        &_logout {
            padding: 20px;
            cursor: pointer;

            h1 {
                font-size: 14px;
                color: @darkGray;
                text-transform: uppercase;
            }
        }
    }

    @media (max-width: 768px) {
        right: unset;
        width: 100%;
        border-radius: unset;
        margin-top: @height-menu-mobile;

        &-items {
            &_item {
                p {
                    font-size: 12px;
                }
            }
        }
    }
}

</style>