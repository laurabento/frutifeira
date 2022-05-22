<template>
  <div class="search-bar">
    <div class="search-bar_items">
      <div class="categories" id="clickCategorias" @click="isOpen = !isOpen">
        <div :class="changeIcon(isOpen)"></div>
        <label>Categorias</label>
      </div>
      <div class="search-bar_inputgroup">
        <div class="search-bar_group">
        <img src="../assets/search-white.svg" />
        <input 
          type="text" 
          id="inputSearchBar"
          ref="inputSearchBar"
          @change="findProduct($event)"
          @keyup="findProduct($event)"
          v-model="selectedLabel"
         />
      </div>
      <div class="search-bar_search">
        <ul id="listProdutos">
            <li
              v-for="item in listProductsSearch"
              :key="item.id"
              @click="selectProduct(item)"
            >
              <label>{{ item }}</label>
            </li>
        </ul>
      </div>
      </div>
    </div>
    <transition name="slide-fade">
      <Categories v-if="isOpen" />
    </transition>
  </div>
</template>

<script>
import axios from "axios";

import Categories from "@/components/Categories.vue";

export default {
  components: {
    Categories,
  },
  data() {
    return {
      isOpen: false,
      condominium: '',
      productsList: [],
      products: [],
      listProductsSearch: [],
      inputWidth: 0,
      selectedLabel: "",
    };
  },
  created() {
    this.hasCondominium();
    this.loadProduct();
  },
  methods: {
    changeIcon(isOpen) {
      return !isOpen ? "menu-icon" : "close-icon";
    },
    hasCondominium() {
      const getCondominium = JSON.parse(localStorage.getItem("condominium"));
      this.condominium = getCondominium._id
    },
    async loadProduct() {
      const condominiumProducts = await axios.get(`http://localhost:5000/api/v1.0/marketcondominium/condominio/${this.condominium}/produtos`);
      const response = condominiumProducts.data;
      response.forEach((item) => {
        this.productsList.push(item.name);
      });
      const productSet = new Set(this.productsList);
      const backToArray = [...productSet];
      this.products = backToArray;
    },
    findProduct() {
      this.searchTerm =
        event.target && event.target.value ? event.target.value.trim() : null;

      if (this.searchTerm) {
        this.listProductsSearch = this.products.filter((d) =>
          d.toLowerCase().includes(this.searchTerm.toLowerCase()),
        );
      }

      if (this.searchTerm && this.searchTerm.lenght <= 3) {
        this.listProductsSearch = [];
      }

      if (!this.searchTerm) {
        this.listProductsSearch = [];
      }
    },
    selectProduct(item) {
      this.selectedLabel = item;
      this.$router.push({ path: '/ListAllProducts/' + this.condominium, query: { search: item }});
      window.location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;

  &_items {
    z-index: 1;
    background-color: @green;
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    margin-top: @height-menu-desktop;

    .categories {
      display: flex;
      align-items: center;
      margin-right: 60px;
      cursor: pointer;

      div {
        margin-right: 10px;
        cursor: pointer;
      }

      label {
        color: white;
        font-weight: 500;
        cursor: pointer;
      }

      .menu-icon {
        background: url("../assets/menu.svg");
        height: 24px;
        width: 24px;
        transition: all 0.25s;
        transform: rotate(0);
      }

      .close-icon {
        background: url("../assets/close.svg");
        height: 24px;
        width: 24px;
        transition: all 0.25s;
        transform: rotate(90deg);
      }
    }
  }

  &_inputgroup {
    width: 100%;
  }

  &_search {
    position: absolute;
    width: calc(100% ~'-' 245.61px);
    background: @searchGreen;
    border-radius: 6px;

    ul {
      li {
        padding: 20px;
        color: white;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        cursor: pointer;

        label {
          cursor: pointer;
        }

        &:last-child {
          border-bottom: unset;
        }
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

  @media (max-width: 768px) {
    &_items {
      padding-left: @margin-menu-mobile;
      padding-right: @margin-menu-mobile;
      margin-top: @height-menu-mobile;

      .categories {
        margin-right: 10px;

        label {
          display: none;
        }
      }
    }
  }
}
</style>
