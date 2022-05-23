<template>
  <div class="marketer-area">
    <div class="tabs">
      <ul>
        <li
          v-for="item in this.products ? tabsListProducts : tabsListMarkets"
          v-bind:id="'marketVendor_' + item.id"
          :key="item.id"
          :class="isActiveTab(item.id) ? 'active' : ''"
          @click="setActiveTab(item.id)"
        >
          <img :src="require(`../assets/${item.id}.svg`)" alt="" />
          <label>{{ item.label }}</label>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <transition name="slide-fade" mode="out-in">
        <div v-if="activeTab === 'cart' || activeTab === 'basket'" key="cart">
          <Table
            @openMarketDetails="openMarketDetails"
            :table="products ? tableProducts : tableMarkets"
            :type="products ? 'products' : 'markets'"
            @openEditProduct="openEditProduct"
            v-if="!isOpenEditProduct"
          />
          <div v-if="isOpenEditProduct">
            <div class="return" @click="openEditProduct">
              <img src="../assets/go-back-icon.svg" />
              <label>voltar</label>
            </div>
            <CreateProduct :edit="true" :editProduct="editProduct" />
          </div>
        </div>
        <div
          v-if="activeTab === 'cart-add' || activeTab === 'help'"
          key="cart-add"
        >
          <MarketSolicitations
            v-if="!products"
            @openModalConfirmation="openModalConfirmation"
          />
          <CreateProduct v-if="products" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CreateProduct from "@/components/CreateProduct.vue";
import Table from "@/components/Table.vue";
import MarketSolicitations from "@/components/MarketSolicitations.vue";

export default {
  name: "MarketerArea",
  components: {
    CreateProduct,
    Table,
    MarketSolicitations,
  },
  props: {
    products: Boolean,
  },
  data() {
    return {
      activeTab: "",
      tabsListProducts: [
        { id: "cart", label: "LISTA DE PRODUTOS" },
        { id: "cart-add", label: "CADASTRO DE PRODUTOS" },
      ],
      tabsListMarkets: [
        { id: "basket", label: "FEIRAS" },
        { id: "help", label: "SOLICITAÇÕES" },
      ],
      tableProducts: ["Nome do produto", "Quantidade", "Unidade", "Preço", ""],
      tableMarkets: ["Condomínio", "Dia da semana", "Hora", "Próximo dia", ""],
      isOpenEditProduct: false,
      editProduct: "",
    };
  },
  created() {
    this.activeTab = this.products
      ? this.tabsListProducts[0].id
      : this.tabsListMarkets[0].id;
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    },
    setActiveTab(id) {
      this.activeTab = id;
    },
    openMarketDetails() {
      this.$emit("openMarketDetails");
    },
    openModalConfirmation(value) {
      this.$emit("openModalConfirmation", value);
    },
    openEditProduct(value) {
      this.editProduct = value;
      return (this.isOpenEditProduct = !this.isOpenEditProduct);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.marketer-area {
  padding-right: @margin-body-desktop;
  padding-left: @margin-body-desktop;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;

  .return {
    display: flex;
    width: 100%;
    margin-top: @margin-body-desktop;
    margin-left: @margin-body-desktop;
    align-items: center;
    cursor: pointer;

    label {
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: 600;
      color: @darkGray;
      cursor: pointer;
    }
  }
  .tabs {
    margin-top: calc(@height-menu-desktop ~"+" 10px);

    &-content {
      margin-top: calc(@height-menu-desktop ~"+" 10px);
    }

    ul {
      margin-top: 35px;

      li {
        display: flex;
        align-items: center;
        padding: 20px 25px;
        margin-bottom: 15px;
        border-radius: 6px;
        cursor: pointer;

        img {
          margin-right: 15px;
          cursor: pointer;
        }

        label {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 0.1em;
          cursor: pointer;
        }
      }

      li.active {
        background-color: @lightGreen;
        color: @green;
        img {
          filter: invert(57%) sepia(94%) saturate(346%) hue-rotate(51deg)
            brightness(98%) contrast(98%);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding-right: @margin-body-mobile;
    padding-left: @margin-body-mobile;
    margin-top: calc(@height-menu-mobile ~"+" 10px);
    grid-template-columns: 1fr;
    margin-bottom: @margin-body-mobile;

    .tabs {
      ul {
        display: flex;
        margin-top: 10px;
        justify-content: center;

        li {
          flex-direction: column;
          text-align: center;
          padding: 8px;
          margin-bottom: unset;

          label {
            font-size: 10px;
          }

          img {
            margin-right: unset;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
