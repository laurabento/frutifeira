<template>
  <div class="table-group">
      <table>
          <tr>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>Unidade</th>
              <th>Preço</th>
              <th></th>
          </tr>
          <tr>
              <td>Alface Mimosa Hidropônica</td>
              <td>300g</td>
              <td>Não</td>
              <td>R$ 4,39</td>
              <td class="dots"><img src="../assets/dots.svg"/></td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.table-group {
    table {
        width: 100%;
        margin-top: 40px;

        tr {
            th {
                border-bottom: 1px solid @gray;
                padding: 10px 0;
                text-align: start;
                color: @darkGray;
            }

            td {
                border-bottom: 1px solid @gray;
                padding: 10px 0;
                color: @darkGray;
            }

            .dots {
                text-align: end;

                img {
                    cursor: pointer;
                }
            }
        }
    }
}

</style>