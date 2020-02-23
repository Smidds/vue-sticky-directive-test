import Vue from "vue";
import App from "./App.vue";
import Sticky from "vue-sticky-directive";

Vue.directive("Sticky", Sticky);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
