<template>
  <div class="container">
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
        <div v-if="activeTab === 'feirantes'" key="feirantes">a</div>
        <div v-if="activeTab === 'solicitacoes'" key="solicitacoes">b</div>
        <div v-if="activeTab === 'info'" key="info">c</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "CondominiumArea",
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "feirantes", label: "FEIRANTES" },
        { id: "solicitacoes", label: "SOLICITAÇÕES" },
        { id: "info", label: "INFORMAÇÕES GERAIS" },
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

.container {
  margin: @margin-body-desktop;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;

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
}
</style>
