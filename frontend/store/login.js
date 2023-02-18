import { defineStore } from "pinia";
export const useLoginStore = defineStore("Login", {
  state: () => ({ Email: {}, Password: {} }),
  actions: {
    loginForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.Email} ${this.Password}login message`);
    },
    someFunction() {
      // Send the form data to the server or display a thank you message
      alert(`Forgot your Password again`);
    },
  },
});
