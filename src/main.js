import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/tailwind.css";
import "@/styles/access-styles.css";

import access from "./access";

Vue.use(access, {
  store,
  router,
  entityBased: false,
  overrideClasses: {
    actionClass: "v-access-disabled-action",
    componentClass: "v-access-disabled-component",
    authClass: "v-access-disabled-auth",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
