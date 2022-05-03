<template>
  <div class="order">
    <div class="order-return" @click="openOrder">
      <img src="../assets/go-back-icon.svg" />
      <label>voltar</label>
    </div>
    <h1>pedidos</h1>
    <div class="order-card">
      <div class="card">
        <div class="card-tag yellow-tag">
          <label class="yellow-label">Em andamento</label>
        </div>
        <h2>Pedido 152</h2>
        <div class="card-info">
          <div class="card-info__item">
            <img src="../assets/time.svg" />
            <div class="info">
              <span>Agendado para:</span>
              <label>04/04/2022 às 20:35</label>
            </div>
          </div>
          <div class="card-info__item">
            <img src="../assets/location.svg" />
            <div class="info">
              <span>Condomínio Vila das Rosas</span>
              <label
                >Rua Joaquim Sales, 241 - Jardim Floresta - São Paulo/SP</label
              >
            </div>
          </div>
        </div>
        <div class="card-buttons">
          <button @click="openTimeline">Acompanhar pedido</button>
          <button @click="openDetailsOrder">Ver Detalhes</button>
          <button>QR Code</button>
        </div>
        <Timeline v-if="isOpenTimeline" />
        <DetailsOrder v-if="isOpenDetailsOrder" />
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import DetailsOrder from "@/components/DetailsOrder.vue";

export default {
  components: {
    Timeline,
    DetailsOrder,
  },
  data() {
    return {
      isOpenTimeline: false,
      isOpenDetailsOrder: false,
    };
  },
  methods: {
    openTimeline() {
      if (this.isOpenDetailsOrder) this.openDetailsOrder();
      return (this.isOpenTimeline = !this.isOpenTimeline);
    },
    openDetailsOrder() {
      if (this.isOpenTimeline) this.openTimeline();
      return (this.isOpenDetailsOrder = !this.isOpenDetailsOrder);
    },
    openOrder() {
      this.$emit("openOrder");
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
    margin-top: 40px;
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
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        button {
          border: 2px solid @green;
          background-color: transparent;
          padding: 18px;
          border-radius: 6px;
          color: @green;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          cursor: pointer;

          &:hover {
            background: @green;
            color: white;
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
