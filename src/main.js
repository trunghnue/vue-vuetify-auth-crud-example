import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VeeValidate from "vee-validate";
import { router } from "./_helpers";

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
