import { defineStore } from "pinia";

export const useContactStore = defineStore("cart", {
  state: () => ({ Name: 10, Email: 0, Message: 0 }),
  actions: {
    submitForm() {
      // Send the form data to the server or display a thank you message
      alert(
        `Thank you ${this.Name} of email ${this.Email}  for your message! ${this.Message}`
      );
    },
  },
});
