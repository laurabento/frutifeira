<template>
  <div class="categories-group">
      <div class="categories-group_list">
          <ul>
              <li>Frutas</li>
              <li>Verduras</li>
              <li>Legumes</li>
              <li>Pastel</li>
              <li>Peixes</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.categories-group {
    background-color: @green;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: @margin-body-desktop;
    padding-left: @margin-body-desktop;
    padding-top: 20px;
    width: 100%;

    &_list {
        width: 100%;
        color: white;
        padding-bottom: 20px;

        ul {
            columns: 5;

            li {
                padding-bottom: 15px;
                cursor: pointer;

                &:hover {
                    font-weight: 600;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding-left: @margin-menu-mobile;
        padding-right: @margin-menu-mobile;

        &_list {
            ul {
                columns: 3;
            }
        }
    }

    @media (max-width: 375px) {
        &_list {
            ul {
                columns: 2;
            }
        }
    }
}
</style>