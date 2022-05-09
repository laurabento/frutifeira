<template>
  <div class="card">
    <div class="card-container" :class="!this.showBorder ? 'border-none' : ''">
      <div class="card-content">
        <img src="../assets/accept.svg" alt="" />
        <p>Alface Mimosa Hidropônica - 300g</p>
      </div>
      <div class="card-btn" @click="isOpen = !isOpen">
        <div :class="changeIcon(isOpen)"></div>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="card-details" v-if="isOpen">
        <Table :products="true" />
      </div>
    </transition>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  props: {
    showBorder: Boolean,
  },
  components: {
    Table,
  },
  data() {
    return {
      isOpen: false,
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
.card {
  display: flex;
  flex-direction: column;

  .card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid @mediumGray;
    border-radius: 6px;
    padding: 27px 20px;
    background-color: white;

    .card-content {
      display: flex;
      gap: 20px;
    }
  }

  .border-none {
    border: none;
  }

  .card-details {
    border: 1px solid @mediumGray;
    border-top: none;
    border-radius: 0 0 6px 6px;
    padding: 20px;
    margin-top: -40px;
    width: 100%;
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

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 10;
}
</style>
