<template>
  <div class="container">
    <div class="search">
      <div class="search-field">
        <p>Número do pedido</p>
        <div class="search-field-input">
          <img src="../assets/search-gray.svg" alt="" />
          <input type="text" />
        </div>
      </div>
      <div class="search-field">
        <p>Forma de pagamento</p>
        <select name="" id=""></select>
      </div>
      <div class="search-field">
        <p>Status do pedido</p>
        <select name="" id=""></select>
      </div>
    </div>
    <Table />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  components: {
    Table,
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.container {
  .search {
    display: flex;
    gap: 20px;
    width: 100%;

    input,
    select {
      background-color: @lightGray;
      height: 50px;
      border-radius: 6px;
      padding: 16px;
      margin-top: 5px;
      width: 100%;
      cursor: pointer;
    }

    &-field {
      width: 100%;
      &-input {
        display: flex;
        align-items: center;
        background-color: @lightGray;
        border-radius: 6px;
        margin-top: 5px;
        cursor: text;

        input {
          margin: 0;
          cursor: text;
        }

        img {
          margin: 13px 0 13px 13px;
          width: 24px;
          height: 24px;
        }
      }
    }

    /*For IE*/
    select::-ms-expand {
      display: none;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      /* Some browsers will not display the caret when using calc, so we put the fallback first */
      background: url("../assets/chevron-down.svg") @lightGray no-repeat 98.5% !important; /* !important used for overriding all other customisations */
      background: url("../assets/chevron-down.svg") @lightGray no-repeat
        calc(100% - 15px) !important; /* Better placement regardless of input width */
    }
  }
}
</style>
