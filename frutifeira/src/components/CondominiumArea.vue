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
        <div v-if="activeTab === 'feirantes'" key="feirantes">
          <Table :table="marketersTable" type="marketVendors" />
        </div>
        <div v-if="activeTab === 'solicitacoes'" key="solicitacoes">
          <Table
            :table="table"
            type="cSolicitations"
            @openModalConfirmation="openModalConfirmation"
          />
        </div>
        <div v-if="activeTab === 'info'" key="info"><CondominiumInfo /></div>
      </transition>
    </div>
  </div>
</template>

<script>
import CondominiumInfo from "@/components/CondominiumInfo.vue";
import Table from "@/components/Table.vue";
export default {
  name: "CondominiumArea",
  components: {
    CondominiumInfo,
    Table,
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "feirantes", label: "FEIRANTES" },
        { id: "solicitacoes", label: "SOLICITAÇÕES" },
        { id: "info", label: "INFORMAÇÕES GERAIS" },
      ],
      table: ["Nome do feirante", "Produto", "Status", "Aprovação"],
      marketersTable: ["Nome do feirante", "Nome da barraca", "Produtos"],
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
    openModalConfirmation(id) {
      this.$emit("openModalConfirmation", id);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.container {
  padding-right: @margin-body-desktop;
  padding-left: @margin-body-desktop;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;

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
          width: 50%;
          flex-direction: column;
          text-align: center;
          padding: 15px;
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
