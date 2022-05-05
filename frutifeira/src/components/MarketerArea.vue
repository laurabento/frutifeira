<template>
  <div class="marketer-area">
    <div class="tabs">
      <ul>
        <li
          v-for="item in tabsList"
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
        <div v-if="activeTab === 'cart'" key="cart">
          <Table />
        </div>
        <div v-if="activeTab === 'cart-add'" key="cart-add">
          <CreateProduct />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CreateProduct from "@/components/CreateProduct.vue";
import Table from "@/components/Table.vue";

export default {
  name: "MarketerArea",
  components: {
    CreateProduct,
    Table
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "cart", label: "LISTA DE PRODUTOS" },
        { id: "cart-add", label: "CADASTRO DE PRODUTOS" },
      ],
    };
  },
  created() {
    this.activeTab = this.tabsList[0].id;
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    },
    setActiveTab(id) {
      this.activeTab = id;
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
  margin-top: calc(@height-menu-desktop ~'+' 10px);

  .tabs {
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
    margin-top: calc(@height-menu-mobile ~'+' 10px);
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
