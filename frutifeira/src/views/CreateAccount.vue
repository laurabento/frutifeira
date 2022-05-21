<template>
  <div>
    <router-link
      :to="{
        path: '/LoginAdm',
      }"
    >
      <div class="return">
        <img src="../assets/go-back-icon.svg" />
        <label>voltar</label>
      </div>
    </router-link>
    <CreateMarketer v-if="type === 'Feirante'" />
    <CreateCondominium v-if="type === 'Condominio'" />
  </div>
</template>

<script>
import CreateMarketer from "@/components/CreateMarketer.vue";
import CreateCondominium from "@/components/CreateCondominium.vue";
export default {
  name: "CreateAccount",
  data() {
    return {
      type: "",
    };
  },
  created() {
    this.type = this.$route.params.id;
  },
  components: {
    CreateMarketer,
    CreateCondominium,
  },
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";
.return {
  display: flex;
  width: 100%;
  margin-top: @margin-body-desktop;
  margin-left: @margin-body-desktop;
  align-items: center;
  cursor: pointer;

  label {
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: 600;
    color: @darkGray;
    cursor: pointer;
  }
}
</style>
