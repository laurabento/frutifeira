<template>
  <div class="timeline">
      <h1>Acompanhe seu pedido</h1>
      <label class="subtitle">Acompanhe as novidades e a evolução de seu pedido.</label>
      <div class="timeline-group">
          <div class="timeline-group_items">
              <div class="img-items">
                  <div class="img-items_picture check"></div>
              </div>
              <div class="text-items">
                  <label>Pedido Realizado</label>
                  <span>Pedido criado dia 12/04/2022</span>
              </div>
          </div>
          <div class="timeline-group_items">
              <div class="img-items item-line">
                  <div class="img-items_picture check"></div>
              </div>
              <div class="text-items">
                  <label>Pagamento Confirmado</label>
                  <!-- <span>Pedido criado dia 12/04/2022</span> -->
              </div>
          </div>
          <div class="timeline-group_items">
              <div class="img-items item-line">
                  <div class="img-items_picture check"></div>
              </div>
              <div class="text-items">
                  <label>Em Separação</label>
                  <!-- <span>Pedido criado dia 12/04/2022</span> -->
              </div>
          </div>
          <div class="timeline-group_items">
              <div class="img-items item-line-gray">
                  <div class="img-items_picture no-check"></div>
              </div>
              <div class="text-items">
                  <label class="text-items_gray">Pedido Separado</label>
                  <!-- <span>Pedido criado dia 12/04/2022</span> -->
              </div>
          </div>
          <div class="timeline-group_items">
              <div class="img-items item-line-gray">
                  <div class="img-items_picture no-check"></div>
              </div>
              <div class="text-items">
                  <label class="text-items_gray">Pedido Finalizado</label>
                  <!-- <span>Pedido criado dia 12/04/2022</span> -->
              </div>
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

.timeline{
    padding: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        font-weight: 700;
        color: @green;
        font-size: 24px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
    }

    .subtitle{
        text-align: center;
    }

    &-group{
        display: flex;
        flex-direction: column;
        margin-top: @margin-body-desktop;
        width: 100%;

        &_items {
            display: grid;
            grid-template-columns: 3fr 1fr 3fr;
            grid-template-areas: "info img text";
            align-items: end;

            .img-items {
                grid-area: img;
                margin: 0 auto;
                display: flex;
                flex-direction: column;

                &_picture {
                    width: 60px;
                    height: 60px;
                    background-size: cover;
                }

                .check {
                    background-image: url("../assets/check.svg");
                }

                .no-check {
                    background-image: url("../assets/no-check.svg");
                }
            }

            .item-line::before {
                content: "";
                width: 3px;
                height: 50px;
                border-radius: 3px;
                margin: 20px auto;
                background-color: @green;
            }

            .item-line-gray::before {
                content: "";
                width: 3px;
                height: 50px;
                border-radius: 3px;
                margin: 20px auto;
                background-color: @gray;
            }

            .text-items {
                grid-area: text;
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;

                label {
                    font-size: 18px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                &_gray {
                    color: @gray;
                }
            }

        }
    }

    @media (max-width: 540px) {

        &-group{
            margin-top: @margin-body-mobile;

            &_items {
                grid-template-columns: 2fr 4fr ;
                grid-template-areas: "img text";

                .img-items {
                    &_picture {
                        width: 30px;
                        height: 30px;
                    }
                }

                .text-items {
                    margin-bottom: 5px;

                    label {
                        font-size: 12px;
                    }
                }
            }
        }

    }
}
</style>