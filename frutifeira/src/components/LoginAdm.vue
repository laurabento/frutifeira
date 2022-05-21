<template>
  <form @submit.prevent="loginAdm">
    <div class="login">
      <div class="login-title">
        <p>Entrar na</p>
        <h1>{{ this.title }}</h1>
      </div>
      <div class="login-form">
        <div class="login-form-field">
          <p>E-mail</p>
          <input type="email" v-model="formData.email" required />
        </div>
        <div class="login-form-field">
          <p>Senha</p>
          <input type="password" v-model="formData.password" required />
        </div>
        <div class="login-form-error" v-if="errorLabel">
          <label>{{ this.errorMessage }}</label>
        </div>
        <button>ENTRAR</button>
        <div class="login-form-info">
          <p>
            Não possui uma conta?
            <router-link
              :to="{
                path: '/CreateAccount/' + (market ? 'Feirante' : 'Condominio'),
              }"
              ><span> Crie aqui!</span></router-link
            >
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: String,
    market: Boolean,
    id: String,
  },
  created() {
    this.checkLogin();
  },
  methods: {
    openPage(name) {
      if (name === "Área do Feirante") this.$router.push({ name: "Products" });
      else
        this.$router.push({
          name: "Condominium",
        });
    },
    checkLogin() {
      const id = localStorage.getItem("id");
      const userType = localStorage.getItem("userType");
      if (id != null) {
        this.$router.push({
          name: userType == "3" ? "Condominium" : "Markets",
        });
      }
    },
    async loginAdm() {
      await fetch(
        `http://localhost:5000/api/v1.0/${
          this.market ? "marketvendors" : "condominium"
        }/login`,
        {
          method: "POST",
          body: JSON.stringify(this.formData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )
        .then((response) => {
          return response.json();
        })
        .then((response_json) => {
          console.log(response_json);
          if (response_json.status === "200") {
            this.errorLabel = false;
            localStorage.setItem("accessToken", response_json.accessToken);
            localStorage.setItem("userType", response_json.userType);
            localStorage.setItem("id", response_json.id);
            this.openPage(this.title);
          } else {
            this.errorMessage = response_json.error;
            this.errorLabel = true;
          }
        })
        .catch((error) => console.log("error: ", error));
    },
  },
  data() {
    return {
      errorLabel: false,
      errorMessage: "",
      formData: {
        email: "",
        password: "",
      },
    };
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

    &-field:first-of-type {
      input {
        margin-bottom: 30px;
      }
    }

    &-field {
      font-weight: 500;

      input {
        background-color: @lightGray;
        height: 50px;
        border-radius: 6px;
        margin-top: 5px;
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
      margin-top: 30px;
      cursor: pointer;
    }

    &-info {
      margin-top: 50px;
      text-align: center;
      span {
        color: @green;
        font-weight: bold;
        cursor: pointer;
      }
    }

    &-error {
      label {
        font-size: 12px;
        color: @red;
      }
    }
  }
}
</style>
