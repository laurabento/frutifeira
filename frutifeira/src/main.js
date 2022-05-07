import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel";

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
    VueCarousel,
}).$mount("#app");