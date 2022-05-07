<template>
  <div class="login">
    <div class="login-title">
      <p>Entrar na</p>
      <h1>{{ this.title }}</h1>
    </div>
    <div class="login-form">
      <div class="login-form-field">
        <p>E-mail</p>
        <input type="email" />
      </div>
      <div class="login-form-field">
        <p>Senha</p>
        <input type="password" />
      </div>
      <button @click="openPage(title)">ENTRAR</button>
      <div class="login-form-info">
        <p>Entre em contato! Mande um e-mail para:</p>
        <span>frutifeira@gmail.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    openPage(name) {
      if (name === "Área do Feirante") this.$router.push({ name: "Products" });
      else this.$router.push({ name: "Condominium" });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.login {
  display: flex;
  width: 100%;
  max-width: 380px;
  margin: 80px auto 0 auto;
  flex-direction: column;

  &-title {
    text-align: center;
    p {
      font-size: 18px;
    }
    h1 {
      font-size: 26px;
    }
  }

  &-form {
    margin: 50px 0;

    &-field {
      font-weight: 500;

      input {
        background-color: @lightGray;
        height: 50px;
        border-radius: 6px;
        margin: 5px 0 30px 0;
        padding: 15px 20px;
        width: 100%;
      }
    }

    button {
      background-color: @green;
      width: 100%;
      height: 50px;
      border-radius: 6px;
      color: white;
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-top: 10px;
      cursor: pointer;
    }

    &-info {
      margin-top: 50px;
      text-align: center;
      span {
        color: @green;
        font-weight: bold;
      }
    }
  }
}
</style>
