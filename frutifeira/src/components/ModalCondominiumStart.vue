<template>
  <div class="background">
    <div class="modal" id="modalCondominios">
      <h1>Temos um conteúdo exclusivo dependendo de seu condomínio.</h1>
      <input
        id="inputModalCondominios"
        type="text"
        placeholder="Procure seu condomínio"
        @change="findCondominium($event)"
        @keyup="findCondominium($event)"
        v-model="selectedLabel"
      />
      <ul id="listCondominios">
        <li
          v-for="item in listCondominiumSearch"
          :key="item.id"
          @click="selectCondominium(item)"
        >
          <label>{{ item.name }} - {{ item.city }}, {{ item.state }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchTerm: "",
      listCondominium: [],
      listCondominiumSearch: [],
      selectedLabel: "",
      selectedId: "",
    };
  },
  created() {
    this.loadCondominium();
    localStorage.clear();
  },
  methods: {
    async loadCondominium() {
      try {
        const condominium = await axios.get(
          "http://localhost:5000/api/v1.0/condominium",
        );
        this.listCondominium = condominium.data;
      } catch (error) {
        console.error("Not found Condominium");
      }
    },
    findCondominium() {
      this.searchTerm =
        event.target && event.target.value ? event.target.value.trim() : null;

      if (this.searchTerm) {
        this.listCondominiumSearch = this.listCondominium.filter((d) =>
          d.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
        );
      }

      if (this.searchTerm && this.searchTerm.lenght <= 3) {
        this.listCondominiumSearch = [];
      }

      if (!this.searchTerm) {
        this.listCondominiumSearch = [];
      }
    },
    selectCondominium(item) {
      this.selectedLabel = item.name + " - " + item.city + ", " + item.state;
      localStorage.setItem("condominium", JSON.stringify(item));
      this.$emit("closeOpenModal");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.background {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 6;
  justify-content: center;
  align-items: center;
  background-color: @black-50;
  overflow: hidden;

  .modal {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 50px;
    border-radius: 16px;
    position: relative;
    align-items: center;
    max-width: 490px;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 24px;
      font-weight: normal;
      text-align: center;
      margin-bottom: 30px;
    }

    input {
      border-bottom: 1px solid @gray;
      border-radius: unset;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
      border-radius: 10px;

      li {
        padding: 16px;
        cursor: pointer;

        label {
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 426px) {
    .modal {
      max-width: 376px;
      padding: 37px;

      h1 {
        font-size: 20px;
      }
    }
  }
}
</style>
