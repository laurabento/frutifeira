<template>
  <div class="background">
    <div class="modal">
      <img
        class="modal-close"
        src="../assets/close-gray.svg"
        alt="fechar"
        @click="openDetails"
      />
      <img class="modal-img" src="../assets/green-apple.jpg" alt="Maçã Verde" />
      <div class="modal-content">
        <div class="modal-content-header">
          <p>BARRACA DA SILVIA</p>
          <h1>Maçã Verde</h1>
          <span>1 unidade</span>
        </div>
        <p>
          Só essa minha cor verdinha, verdinha já dá uma ideia de coisa gostosa,
          fresca e muito saudável, não é? E é a pura verdade, por várias razões,
          a começar pelo meu sabor delicioso, com um toque um pouco mais ácido
          do que minhas primas vermelhas, e também com menor teor de açúcar. Por
          isso eu, a autêntica maçã verde, dou um gostinho especial em saladas,
          sucos e em muito mais. Mesmo não sendo orgânica, fui selecionada com
          carinho, o que garante minha alta qualidade. Pra completar, sou rica
          em fibras, vitaminas e minerais.
        </p>
        <div class="modal-content-amount">
          <img
            class="modal-content-amount-remove"
            @click="addRemoveAmount(false)"
            src="../assets/remove.svg"
          />
          <p id="amount">1</p>
          <img
            class="modal-content-amount-add"
            @click="addRemoveAmount(true)"
            src="../assets/add.svg"
          />
        </div>
        <button class="modal-content-button">
          <p>Adicionar</p>
          <p>R$ 4,99</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openDetails() {
      this.$emit("openDetails");
    },

    addRemoveAmount(add) {
      let amount = parseInt(document.getElementById("amount").innerHTML);
      let textField = document.getElementById("amount");

      if (add) {
        textField.innerHTML = amount += 1;
      } else if (amount > 0) {
        textField.innerHTML = amount -= 1;
      }
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
  z-index: 3;
  justify-content: center;
  align-items: center;
  background-color: @white-50;
  overflow: hidden;

  .modal {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 990px;
    background-color: white;
    border-radius: 16px;
    padding: 50px;
    box-shadow: -4px 1px 15px 0px #0000001a;
    margin: @margin-body-desktop;

    &-close {
      position: absolute;
      top: 25px;
      right: 25px;
      cursor: pointer;
    }

    &-img {
      width: 400px;
      height: 400px;
      object-fit: cover;
      border-radius: 16px;
      border: 3px solid @lightGray;
    }

    &-content {
      display: flex;
      flex-direction: column;
      margin-left: 30px;

      &-header {
        margin-bottom: 25px;
        h1 {
          font-size: 32px;
          margin: 5px 0 5px 0;
        }
      }

      &-amount {
        display: flex;
        justify-content: flex-end;
        margin-top: 65px;

        p {
          font-size: 18px;
          font-weight: bold;
          margin: 0 20px 0 20px;
        }

        img {
          cursor: pointer;
          width: 24px;
          height: 24px;
          border: none;
        }
        // &-add {
        //   background-color: transparent;
        //   background-image: url("../assets/add.svg");
        // }
        &-add:hover {
          background-image: url("../assets/add-green.svg");
        }
        // &-remove {
        //   background-image: url("../assets/remove.svg");
        // }
        &-remove:hover {
          background-image: url("../assets/remove-green.svg");
        }
      }

      &-button {
        display: flex;
        align-self: flex-end;
        margin-top: 25px;
        padding: 19px 21px;
        background-color: white;
        border: 2px solid @green;
        border-radius: 6px;
        color: @green;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        p:first-of-type {
          margin-right: 50px;
        }

        &:hover {
          background-color: @green;
          color: white;
        }
      }
    }

    @media (max-width: 860px) {
      &-img {
        width: 300px;
        height: 300px;
      }
    }

    @media (max-width: 790px) {
      display: flex;
      height: calc(100% ~"-" @height-menu-desktop);
      flex-direction: column;
      align-items: center;
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 40px;

      &-close {
        top: 15px;
        right: 15px;
      }

      &-img {
        margin-bottom: 30px;
      }

      &-content {
        margin: 0;
        &-amount {
          margin-top: 45px;
        }
      }
    }

    @media (max-width: 425px) {
      padding: @margin-body-mobile;

      &-img {
        width: 260px;
        margin-top: 20px;
      }

      &-content {
        p {
          font-size: 12px;
        }
        &-header {
          h1 {
            font-size: 24px;
          }
        }

        &-amount {
          p {
            font-size: 14px;
          }
          margin-top: 20px;
        }

        &-button {
          padding: 15px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
