<template>
  <div class="main-header">
      <img src="../assets/logo-frutifeira.svg" />
      <div class="main-header_items">
          <div class="location">
              <img src="../assets/location.svg" />
              <label>Qual seu condomínio?</label>
          </div>
          <div class="bag">
              <img src="../assets/bag.svg" />
              <div class="bag_items">
                  <label>R$ 0,00</label>
                  <span>0 itens</span>
              </div>
          </div>
          <div class="login" @click="openMenu">
              <img src="../assets/person.svg" />
              <label>Entrar</label>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        openMenu() {
            this.$emit("openMenu");
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @height-menu-desktop;
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;

    img {
        height: 33px;
    }

    &_items {
        display: flex;
        align-items: center;

        img {
            height: 25px;
            width: 25px;
            margin-right: 16px;
        }

        label { 
            font-weight: 500;
        }

        span {
            font-size: 10px;
        }

        .location {
            display: flex;
            align-items: center;
        }

        .bag {
            display: flex;
            align-items: center;

            &_items {
                display: flex;
                flex-direction: column;
            }
        }

        .login {
            display: flex;
            align-items: center;
            cursor: pointer;

            label {
                cursor: pointer;
            }
        }

        .location::after, .bag:after {
            content: '';
            height: 47px;
            width: 1px;
            border-radius: 1px;
            background-color: @gray;
            margin: 0 25px 0 25px;
        }
    }

    @media (max-width: 768px) {
        height: @height-menu-mobile;
        padding-left: @margin-menu-mobile;
        padding-right: @margin-menu-mobile;
        
        img {
            height: 22px;
        }

        &_items{
            img {
                margin-right: unset;
            }

            label, span {
                display: none;
            }

            .location, .bag {
                img {
                    margin-right: 10px;
                }
            }

            .location::after, .bag:after {
                display: none;
            }
        }
    }
}

</style>