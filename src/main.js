import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBNOC3IBJR_GEfF4mNbJ_ll4R74FFH0RqI",
  },
});



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
