<template>
  <div class="footer">
      <div class="container">
          <div class="footer-title">
              <img src="../assets/logo-frutifeira.svg"/>
          </div>
          <div class="footer-bottom">
              <p>FRUTIFEIRA. Projeto desenvolvido para as disciplinas de Linguagem de Programação IV e Qualidade de Software do curso de Engenharia da Computação da Faculdade Engenheiro Salvador Arena. 2022.</p>
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
.footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(0deg, @lightGray 0%, rgba(246, 246, 246, 0) 100%);
    margin-top: 60px;

    .container {
        margin-left: @margin-body-desktop;
        margin-right: @margin-body-desktop;
    }

    &-title {
        border-top: 1px solid @gray;
        border-bottom: 1px solid @gray;
        padding: 8px 0;

        img { 
            height: 28px;
        }
    }

    .footer-content {
        ul {
            columns: 3;
            padding-bottom: 30px;

            li {
                padding: 30px 0 0 0;
                cursor: pointer;
            }

            li:hover {
                font-weight: 600;
            }
        }
    }

    .footer-bottom {
        border-top: 1px solid @gray;

        p {
            font-size: 11px;
            margin-top: 10px;
            width: 60%;
        }
    }

    @media (max-width: 768px) {
        height: 115px;

        .container {
            margin-left: @margin-body-mobile;
            margin-right: @margin-body-mobile;
        }

        .footer-content {
            ul {
                columns: 2;
            }
        }

        .footer-bottom {
            p {
                font-size: 9px;
                margin-top: 10px;
                width: 100%;
            }
        }
    }

    @media (max-width: 425px) {
        height: 150px;
    }
}
</style>
