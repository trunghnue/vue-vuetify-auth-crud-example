import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VeeValidate from "vee-validate";
import { router } from "./_helpers";
import { store } from "./_store";

Vue.use(VeeValidate);
// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
