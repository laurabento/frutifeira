<template>
  <div class="search-bar">
      <div class="search-bar_items">
          <div class="categories" @click="isOpen = !isOpen">
              <img src="../assets/menu.svg"/>
              <label>Categorias</label>
          </div>
          <div class="search-bar_group">
              <img src="../assets/search-white.svg"/>
              <input type="text"/>
          </div>    
      </div>
      <div class="categories-list" v-if="isOpen">
          <ul>
              <li>Frutas</li>
              <li>Verduras</li>
              <li>Legumes</li>
              <li>Pastel</li>
              <li>Peixes</li>
          </ul>
      </div>
  </div>
</template> 

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.search-bar {
    background-color: @green;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;
    padding-top: 20px;

    &_items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 20px;

        .categories {
            display: flex;
            align-items: center;
            margin-right: 60px;
            cursor: pointer;

            img {
                margin-right: 10px;
                cursor: pointer;
            }
            
            label {
                color: white;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }

    &_group {
        display: flex;
        width: 100%;

        img {
            border-radius: 6px 0 0 6px;
            background: @white-20;
            padding: 13px;
        }

        input {
            padding: 16px 16px 16px 0;
            border-radius: 0 6px 6px 0;
            background: @white-20;
            color: white;
            font-weight: 500;
            width: 100%;
        }
    }

    .categories-list {
        width: 100%;
        color: white;
        padding-bottom: 20px;

        ul {
            columns: 5;

            li {
                padding-bottom: 15px;
            }
        }
    }

    @media (max-width: 768px) {
        padding-left: @margin-menu-mobile;
        padding-right: @margin-menu-mobile;

        .categories-list {
            ul {
                columns: 3;
            }
        }
    }

    @media (max-width: 375px) {
        .categories-list {
            ul {
                columns: 2;
            }
        }
    }
}

</style>