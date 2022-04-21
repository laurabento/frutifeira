<template>
  <div class="menu">
      <div class="menu-items">
          <div class="menu-items_item">
              <h1>Perfil</h1>
              <p>Aqui você pode acessar seu perfil, alterar dados e senhas.</p>
          </div>
          <div class="menu-items_item">
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

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.menu {
    width: 495px;
    height: auto;
    position: absolute;
    z-index: 2;
    background-color: white;
    border-radius: 16px;
    box-shadow: -4px 1px 15px 0px #0000001a;
    right: @margin-body-desktop;

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
        width: auto;
        border-radius: unset;


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