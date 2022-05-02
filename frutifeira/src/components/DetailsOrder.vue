<template>
  <div class="details-order">
      <h1>Detalhes do Pedido</h1>
      <div class="details-order_group">
          <h2>Barraca da Meire</h2>
          <ul>
              <li>
                <div class="details-product">
                    <div class="details-quant">
                        <label>1</label>
                    </div>
                    <label>Maçã Verde</label>
                </div>
                <div class="details-price">
                    <label>R$ 4,99</label>
                </div>
              </li>
              <li>
                <div class="details-product">
                    <div class="details-quant">
                        <label>1</label>
                    </div>
                    <label>Maçã Verde</label>
                </div>
                <div class="details-price">
                    <label>R$ 4,99</label>
                </div>
              </li>
              <li>
                <div class="details-product">
                    <div class="details-quant">
                        <label>1</label>
                    </div>
                    <label>Maçã Verde</label>
                </div>
                <div class="details-price">
                    <label>R$ 4,99</label>
                </div>
              </li>
          </ul>
          <div class="details-order_total">
              <div class="total_group">
                  <label class="title-total">Total</label>
                  <label>R$ 10,00</label>
              </div>
          </div>
      </div>
      <div class="details-order_price">
          <div class="price_group">
            <label class="title-price">Total</label>
            <label>R$ 12,00</label>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.details-order {
    padding: 40px 0 0 0;
    display: flex;
    flex-direction: column;

    h1{
        font-weight: 700;
        color: @green;
        font-size: 24px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
    }

    &_group {
        margin-top: 40px;

        h2 {
            font-weight: 700;
            font-size: 22px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: @darkGray;
        }

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 30px;
            padding-top: 30px;

            li {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .details-product {
                    display: flex;
                    align-items: center;

                    label {
                        font-weight: 600;
                    }

                    .details-quant {
                        background-color: @lightGreen;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        margin-right: 20px;

                        label {
                            font-weight: 700;
                            color: @green;
                        }
                    }
                }
            }
        }
    }

    &_total {
        display: flex;
        margin-top: 20px;
        width: 100%;
        background-color: @lightGray;
        padding: 13px;
        border-radius: 10px;
        align-items: center;
        justify-content: end;

        .total_group {
            label {
                font-size: 16px;
                text-transform: uppercase;
                font-weight: 700;
                color: @darkGray;
            }

            .title-total {
                margin-right: 40px;
            }
        }
    }

    &_price {
        display: flex;
        margin-top: 20px;
        width: 100%;
        background-color: @lightGreen;
        padding: 13px;
        border-radius: 10px;
        align-items: center;
        justify-content: end;

        .price_group {
            label {
                font-size: 16px;
                text-transform: uppercase;
                font-weight: 700;
                color: @green;
            }

            .title-price {
                margin-right: 40px;
            }
        }
    }
}

</style>