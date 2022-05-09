<template>
  <div class="card">
    <div
      class="card-container"
      :class="this.contact ? 'card-container-margin' : ''"
    >
      <div class="card-content">
        <img :src="require(`../assets/${icon}`)" alt="" />
        <div class="card-content-title">
          <h1>{{ this.title }}</h1>
          <p v-if="address">Endereço do condomínio</p>
        </div>
      </div>
      <div class="card-contact" v-if="contact">
        <img src="../assets/phone.svg" alt="" />
        <div class="card-content-title">
          <h1>{{ this.tel }}</h1>
        </div>
      </div>
      <div v-if="address" @click="isOpen = !isOpen">
        <div :class="changeIcon(isOpen)"></div>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="card-address" v-if="isOpen">
        <div class="card-address-details">
          <h1>CEP</h1>
          <p>99999-999</p>
        </div>
        <div class="card-address-details">
          <h1>Estado</h1>
          <p>São Paulo</p>
        </div>
        <div class="card-address-details">
          <h1>Cidade</h1>
          <p>Santo André</p>
        </div>
        <div class="card-address-details">
          <h1>Bairro</h1>
          <p>Centro</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    address: Boolean,
    contact: Boolean,
    time: Boolean,
    title: String,
    tel: String,
  },
  data() {
    return {
      isOpen: false,
      icon: this.address
        ? "location.svg"
        : this.contact
        ? "envelope.svg"
        : "time.svg",
    };
  },
  methods: {
    changeIcon(isOpen) {
      return !isOpen ? "open-icon" : "close-icon";
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 10;
}

.card {
  display: flex;
  flex-direction: column;

  h1,
  p {
    font-size: 16px;
  }

  &-container {
    display: flex;
    width: 100%;
    background-color: @lightGray;
    border-radius: 6px;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;

    .card-content {
      display: flex;
      &-title {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        justify-content: center;

        h1 {
          margin-bottom: 5px;
        }
      }
    }

    .card-contact {
      display: flex;
    }

    .invisible {
      display: none;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  .card-container-margin {
    justify-content: inherit;

    .card-contact {
      margin-left: 25%;
    }
  }

  &-address {
    display: flex;
    border: 3px solid @lightGray;
    border-radius: 0 0 6px 6px;
    border-top: none;
    margin-top: -3px;
    justify-content: space-between;
    padding: 20px 30px;

    &-details {
      h1 {
        margin-bottom: 8px;
      }
    }
  }

  .open-icon {
    background: url("../assets/chevron-down.svg");
    height: 24px;
    width: 24px;
    transition: all 0.25s;
    transform: rotate(0);
    cursor: pointer;
  }

  .close-icon {
    background: url("../assets/chevron-down.svg");
    height: 24px;
    width: 24px;
    transition: all 0.25s;
    transform: rotate(180deg);
    cursor: pointer;
  }
}
</style>
