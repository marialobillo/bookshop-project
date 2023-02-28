import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({ Total: 10, VAT: 0, Deduction: 0 }),
  actions: {
    purchaseForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.email} purchase message`);
    },
  },
});
