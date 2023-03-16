import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    Total: 10,
    VAT: 0.3,
    Deduction: 0,
  }),
  actions: {
    purchaseForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.email} purchase message`);
    },
    addToCart(product) {
      let found = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === product.id) {
          this.cartItems[i].quantity++;
          this.cartItems[i].total =
            this.cartItems[i].quantity * this.cartItems[i].price;
          found = true;
          break;
        }
      }
      if (!found) {
        this.cartItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          total: product.price,
        });
      }
    },
    setTotal() {
      this.Total = 10;
      this.VAT = 0.3 * this.Total;
    },
  },
  getters: {
    gettotal(state) {
      return state.Total;
    },
  },
});
