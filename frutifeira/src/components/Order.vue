<template>
  <div class="order">
    <div class="order-return" @click="openOrder">
      <img src="../assets/go-back-icon.svg" />
      <label>voltar</label>
    </div>
    <h1>pedidos</h1>
    <div class="order-card" v-for="order in clientOrders" :key="order._id">
      <div class="card">
        <div class="card-tag green-tag">
          <label class="green-label">{{ order.status }}</label>
        </div>
        <h2>Pedido {{ order.orderNumber }}</h2>
        <div class="card-info">
          <div class="card-info__item">
            <img src="../assets/time.svg" />
            <div class="info">
              <span>Retirada: </span>
              <label
                >{{ order.scheduling.weekDay }},
                {{ new Date(order.orderDate).toLocaleDateString("pt-br") }} às
                {{ order.scheduling.schedule }}</label
              >
            </div>
          </div>
          <div class="card-info__item">
            <img src="../assets/location.svg" />
            <div class="info">
              <span>{{ order.condominiumName }}</span>
              <label>{{
                order.condominiumAddress +
                " - " +
                order.condominiumNeighborhood +
                " - " +
                order.condominiumCity +
                ", " +
                order.condominiumState
              }}</label>
            </div>
          </div>
        </div>
        <div class="card-buttons">
          <button
            class="card-buttons_details"
            @click="openDetailsOrder(order.orderNumber)"
          >
            Ver Detalhes <img src="../assets/arrow-green-inicial.svg" />
          </button>
        </div>
        <DetailsOrder
          v-if="isOpenDetailsOrder && orderNumber === order.orderNumber"
          :key="order.orderNumber"
          :clientProducts="order.items"
          :total="order.totalPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import DetailsOrder from "@/components/DetailsOrder.vue";

export default {
  components: {
    DetailsOrder,
  },
  data() {
    return {
      isOpenDetailsOrder: false,
      userId: "",
      orderNumber: 0,
      clientOrders: [],
    };
  },
  created() {
    this.getUserId();
    this.getOrders();
  },
  methods: {
    openDetailsOrder(orderNumber) {
      this.orderNumber = orderNumber;
      return (this.isOpenDetailsOrder = !this.isOpenDetailsOrder);
    },
    openOrder() {
      this.$emit("openOrder");
    },
    getUserId() {
      this.userId = localStorage.getItem("id");
    },
    async getOrders() {
      console.log("entrou");
      const orders = await axios.get(
        "http://localhost:5000/api/v1.0/orders/usuario/" + this.userId,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        },
      );
      this.clientOrders = orders.data;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.order {
  height: calc(100vh ~"-" @height-menu-desktop);
  width: 100%;
  position: fixed;
  top: @height-menu-desktop;
  background-color: @lightGray;
  z-index: 2;
  overflow: scroll;
  padding-right: @margin-body-desktop;
  padding-left: @margin-body-desktop;

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

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.1em;
    color: @green;
    text-transform: uppercase;
    padding: 40px 0;
  }

  .order-card {
    .card {
      background-color: white;
      width: 100%;
      border-radius: 16px;
      padding: 40px;
      margin-bottom: 25px;

      &-tag {
        width: fit-content;
        padding: 7px;
        border-radius: 4px;

        label {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 700;
        }
      }

      .yellow-tag {
        background-color: @lightYellow;
      }

      .yellow-label {
        color: @yellow;
      }

      .green-tag {
        background-color: @lightGreen;
      }

      .green-label {
        color: @green;
      }

      h2 {
        font-weight: 800;
        font-size: 24px;
        letter-spacing: 0.1em;
        color: @green;
        padding: 20px 0;
        text-transform: uppercase;
      }

      &-info {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 30px;

        &__item {
          display: flex;
          margin-right: 100px;
          align-items: center;

          img {
            height: 40px;
            width: 40px;
            margin-right: 10px;
          }

          .info {
            display: flex;
            flex-direction: column;

            span {
              font-weight: 500;
              font-size: 12px;
              color: @gray;
            }

            label {
              font-weight: 700;
              font-size: 14px;
              color: @green;
            }
          }
        }
      }

      &-buttons {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;

        button {
          background-color: transparent;
          padding: 18px 18px 0 18px;
          border-radius: 6px;
          color: @green;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: calc(100vh ~"-" @height-menu-mobile);
    top: @height-menu-mobile;
    padding-right: @margin-body-mobile;
    padding-left: @margin-body-mobile;

    h1 {
      padding: 25px 0;
    }

    &-return {
      margin-top: @margin-body-mobile;
    }

    .order-card {
      .card {
        padding: 30px;

        &-info {
          padding-bottom: unset;

          &__item {
            margin-right: unset;
            margin-bottom: 30px;

            img {
              width: 30px;
              height: 30px;
            }
          }
        }

        &-buttons {
          button {
            font-size: 11px;
          }
        }
      }
    }
  }
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: @lightGray;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: @gray;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: @gray;
}
</style>
