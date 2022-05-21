<template>
  <div class="categories-group">
      <div class="categories-group_list">
          <ul>
              <li id="clickCategorias1" @click="clickFruits">Frutas</li>
              <li id="clickCategorias2" @click="clickVegetables">Verduras</li>
              <li id="clickCategorias3" @click="clickLegumes">Legumes</li>
              <li id="clickCategorias4" @click="clickPastel">Pastel</li>
              <li id="clickCategorias5" @click="clickFish">Peixes</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            condominium: ''
        }
    },
    created(){
        this.hasCondominium();
    },
    methods: {
        hasCondominium() {
            const getCondominium = JSON.parse(localStorage.getItem("condominium"));
            this.condominium = getCondominium._id
        },
        clickFruits() {
            this.$router.push({ path: '/ListAllProducts/' + this.condominium, query: { type: 'fruits' }});
            window.location.reload();
        },
        clickVegetables() {
            this.$router.push({ path: '/ListAllProducts/' + this.condominium, query: { type: 'vegetables' }});
            window.location.reload();
        },
        clickLegumes() {
            this.$router.push({ path: '/ListAllProducts/' + this.condominium, query: { type: 'legumes' }});
            window.location.reload();
        },
        clickPastel() {
            this.$router.push({ path: '/ListAllProducts/' + this.condominium, query: { type: 'pastel' }});
            window.location.reload();
        },
        clickFish() {
            this.$router.push({ path: '/ListAllProducts/' + this.condominium, query: { type: 'fish' }});
            window.location.reload();
        },
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.categories-group {
    background-color: @green;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;
    padding-top: 20px;
    width: 100%;

    &_list {
        width: 100%;
        color: white;
        padding-bottom: 20px;

        ul {
            columns: 5;

            li {
                padding-bottom: 20px;
                cursor: pointer;

                &:hover {
                    font-weight: 600;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding-left: @margin-menu-mobile;
        padding-right: @margin-menu-mobile;

        &_list {
            ul {
                columns: 3;
            }
        }
    }

    @media (max-width: 375px) {
        &_list {
            ul {
                columns: 2;
            }
        }
    }
}
</style>