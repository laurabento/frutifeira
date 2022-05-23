<template>
  <div class="modal">
    <div class="modal-return" @click="openMarketDetails">
      <img src="../assets/go-back-icon.svg" />
      <label>voltar</label>
    </div>
    <div class="modal-content">
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
          <div class="tab" v-if="activeTab === 'clipboard'" key="clipboard">
            <CardCondominium
              :address="true"
              :condominiumDetails="condominiumDetails"
            />
            <CardCondominium
              :contact="true"
              :condominiumDetails="condominiumDetails"
            />
            <CardCondominium
              :time="true"
              :condominiumDetails="condominiumDetails"
            />
          </div>
          <!-- <div class="tab" v-if="activeTab === 'cart'" key="cart">
            <Products @openProducts="openProducts" />
          </div> -->
          <div class="tab" v-if="activeTab === 'dolar'" key="dolar">
            <MarketOrders :condominiumId="condominiumDetails._id" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardCondominium from "@/components/CardCondominium.vue";
// import Products from "@/components/Products.vue";
import MarketOrders from "@/components/MarketOrders.vue";
export default {
  components: {
    CardCondominium,
    // Products,
    MarketOrders,
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "clipboard", label: "DADOS GERAIS" },
        // { id: "cart", label: "PRODUTOS" },
        { id: "dolar", label: "PEDIDOS" },
      ],
      condominiumDetails: [],
    };
  },
  async created() {
    this.activeTab = this.tabsList[0].id;
    this.condominiumDetails = await this.loadCondominium();
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    },
    setActiveTab(id) {
      this.activeTab = id;
    },
    openProducts() {
      this.$emit("openProducts");
    },
    openMarketDetails() {
      this.$emit("openMarketDetails");
    },
    async loadCondominium() {
      return axios
        .get(
          "http://localhost:5000/api/v1.0/condominium/" +
            localStorage.getItem("cId"),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
        .then((response) => {
          return response;
        })
        .then((response_json) => {
          return response_json.data;
        })
        .catch((error) => console.log(error));
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
  margin-top: @height-menu-desktop;
  width: 100%;
  position: fixed;
  z-index: 1;
  height: calc(100% ~"-" @height-menu-desktop);

  &-return {
    display: flex;
    width: 100%;
    margin-top: @margin-body-desktop;
    align-items: center;
    cursor: pointer;

    label {
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
    }
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;

    .tab {
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

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
