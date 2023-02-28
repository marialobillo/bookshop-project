import { defineStore } from "pinia";
import router from "../src/router";
export const useLoginStore = defineStore("Login", {
  state: () => ({ Email: "", Password: "" }),
  actions: {
    loginForm() {
      // Send the form data to the server or display a thank you message

      router.push("/ContentManagement");
    },
    someFunction() {
      // Send the form data to the server or display a thank you message
      alert(`Forgot your Password again`);
    },
  },
});
