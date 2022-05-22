<template>
  <div class="tabs">
    <ul>
      <li
        v-for="item in tabsList"
        v-bind:id="'login_' + item.id"
        :key="item.id"
        :class="isActiveTab(item.id) ? 'active' : ''"
        @click="setActiveTab(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>

    <div class="tabs-container">
      <transition name="tab-fade" mode="out-in">
        <div v-if="activeTab === 'feirante'" key="feirante">
          <LoginAdm :title="titleMarketer" :market="true" />
        </div>
        <div v-if="activeTab === 'condominio'" key="condominio">
          <LoginAdm :title="titleCondominium" :market="false" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import LoginAdm from "@/components/LoginAdm.vue";
export default {
  components: {
    LoginAdm,
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "feirante", label: "Feirante" },
        { id: "condominio", label: "Condomínio" },
      ],
      titleMarketer: "Área do Feirante",
      titleCondominium: "Área do Condomínio",
    };
  },
  created() {
    this.activeTab = this.tabsList[0].id;
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    },
    setActiveTab(id) {
      this.activeTab = id;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.keyframes(@name; @arguments) {
  @-moz-keyframes @name {
    @arguments();
  }
  @-webkit-keyframes @name {
    @arguments();
  }
  @keyframes @name {
    @arguments();
  }
}

.animation(@arguments) {
  -webkit-animation: @arguments;
  -moz-animation: @arguments;
  animation: @arguments;
}

.keyframes(show;{
		0% { border-color: transparent; }
		100% { border-color: @green; }
		});

.tabs {
  width: auto;
  margin: @margin-body-desktop;

  ul {
    display: flex;
    list-style: none;
    width: fit-content;
    padding: 0 20px;
    height: 45px;
    margin: auto;

    li {
      margin: 0 15px;
      font-size: 16px;
      font-weight: 600;
      color: @gray;
      padding: 0 10px;
      height: 44px;
      cursor: pointer;
    }

    li.active {
      color: @green;
      border-bottom: 3px solid @green;
      animation: show 0.3s ease-in-out;
    }
  }

  &-container {
    max-width: auto;
  }

  @media (max-width: 425px) {
    margin: @margin-body-mobile;
  }
}

.tab-fade-enter-active {
  transition: all 0.5s;
}
.tab-fade-leave-active {
  transition: all 0.5s ease;
}
.tab-fade-enter,
.tab-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
