<template>
  <div class="background">
    <div class="modal">
      <img
        class="modal-close"
        src="../assets/close-gray.svg"
        @click="openModalConfirmation"
      />
      <img class="modal-img" src="../assets/attention.svg" />
      <h1>Atenção</h1>
      <p>{{ text }}</p>
      <div class="modal-buttons">
        <button @click="confirm">Sim</button>
        <button @click="openModalConfirmation">Não</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ModalConfirmation",
  props: {
    confirmationType: Number,
  },
  data() {
    return {
      solicitation: {
        condominiumId: "",
        marketVendorId: "",
        status: "",
        approvalDate: "",
      },
    };
  },
  computed: {
    text() {
      if (this.confirmationType === 1)
        return "Deseja enviar uma solicitação para participar da feira deste condomínio?";
      else if (this.confirmationType === 2)
        return "Ao aprovar esta solicitação, o respectivo feirante estará liberado para participar de sua feira. Deseja aprovar?";
      else
        return "Ao reprovar esta solicitação, o respectivo feirante não poderá participar de sua feira. Deseja reprovar?";
    },
  },
  methods: {
    openModalConfirmation() {
      this.$emit("openModalConfirmation");
    },
    confirm() {
      if (
        this.confirmationType === 1 ||
        this.confirmationType === 2 ||
        this.confirmationType === 3
      ) {
        this.solicitation.condominiumId =
          this.confirmationType === 1
            ? localStorage.getItem("cId")
            : localStorage.getItem("id");

        this.solicitation.marketVendorId =
          this.confirmationType === 1
            ? localStorage.getItem("id")
            : localStorage.getItem("fId");

        this.solicitation.status =
          this.confirmationType === 1
            ? "Pendente"
            : this.confirmationType === 2
            ? "Aprovado"
            : "Reprovado";

        if (this.confirmationType === 2) {
          this.solicitation.approvalDate = new Date().toLocaleDateString(
            "pt-br",
          );
        }

        if (this.confirmationType === 1) this.saveSolicitation();
        if (this.confirmationType === 2 || this.confirmationType === 3)
          this.updateSolicitation();

        this.openModalConfirmation();
        location.reload();
      }
    },
    async saveSolicitation() {
      await axios
        .post(
          "http://localhost:5000/api/v1.0/marketcondominium/",
          this.solicitation,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
        .then(() => {
          console.log("Solicitação enviada!");
        })
        .catch((error) => console.log(error));
    },
    async updateSolicitation() {
      await axios
        .patch(
          "http://localhost:5000/api/v1.0/marketcondominium/" +
            localStorage.getItem("mcId"),
          this.solicitation,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          },
        )
        .then(() => {
          console.log("Solicitação enviada!");
        })
        .catch((error) => console.log(error));
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
    width: 100%;
    max-width: 520px;
    background-color: white;
    padding: 40px;
    border-radius: 16px;
    position: relative;
    margin: @margin-body-desktop;
    align-items: center;

    &-close {
      position: absolute;
      top: 25px;
      right: 25px;
      cursor: pointer;
    }

    &-img {
      width: 100px;
      height: 100px;
    }

    p {
      width: 100%;
      max-width: 400px;
      text-align: center;
    }

    h1 {
      font-weight: 400;
      margin: 10px;
    }

    &-buttons {
      display: flex;
      width: 100%;
      gap: 50px;
      justify-content: center;
      margin-top: 25px;

      button {
        background-color: @green;
        color: white;
        font-weight: bold;
        letter-spacing: 0.1em;
        border-radius: 6px;
        width: 100%;
        max-width: 160px;
        height: 50px;
        cursor: pointer;
      }
    }
  }
}
</style>
