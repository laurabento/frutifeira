<template>
  <div class="modal">
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
        <div v-if="activeTab === 'clipboard'" key="clipboard">
          <CardCondominium />
        </div>
        <div v-if="activeTab === 'cart'" key="cart">
          <CreateProduct />
        </div>
        <div v-if="activeTab === 'dolar'" key="dolar">
          <CreateProduct />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CardCondominium from "@/components/CardCondominium.vue";
export default {
  components: {
    CardCondominium,
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "clipboard", label: "DADOS GERAIS" },
        { id: "cart", label: "PRODUTOS" },
        { id: "dolar", label: "PEDIDOS" },
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

.modal {
  padding-right: @margin-body-desktop;
  padding-left: @margin-body-desktop;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 1;
  height: calc(100% ~"-" @height-menu-desktop);

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
