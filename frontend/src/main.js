import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useCounterStore } from "../store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "popper.js";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(
    createPinia({
    modules: {
      counter: useCounterStore,
    },
  })
);

app.mount("#app");
