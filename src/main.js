import Vue from "vue";
import App from "./App.vue";
import vjdesign from "../package/index";
import "bootstrap/dist/css/bootstrap-grid.css";

Vue.config.productionTip = false;

Vue.use(vjdesign);

new Vue({
  render: h => h(App)
}).$mount("#app");