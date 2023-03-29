import { createApp } from "vue";
//import VueMeta from 'vue-meta';
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useCounterStore } from "../store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "popper.js";
import "./assets/main.css";

const Pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(Pinia);
app.use(
  createPinia({
    modules: {
      counter: useCounterStore,
    },
  })
);

app.mount("#app");
