import { defineStore } from "pinia";
//import { useBooksStore } from "./post";
//import { useCartStore } from "./cart";
//const Books = useBooksStore();
//const carty = useCartStore();

export const usePublisherStore = defineStore("Publisher", {
  state: () => ({
    product: [
      { id: 1, name: "Jane" },
      { id: 2, name: "linda" },
      { id: 3, name: "Mary" },
    ],
  }),
  actions: {
    addForm() {
      // Send the form data to the server or display a thank you message
      alert(`previous function next publisher`);
    },
    someFunction() {
      alert(`should go next `);
    },
    removeItem(index) {
      this.product.pop(index);
    },
    addToCart(getters) {
      const identity = this.id;
      const identi = getters;
      alert(`should go next ${this.product} ${identity}${identi}`);
    },
    //getId(id) {
    //id = 10;
    //alert(`should go next ${id} `);
    // },
    sumeFunction(itemClicked) {
      //product push product to the empty array
      // Send the form data to the server or display a thank you message
      //this.Purchase = Purchase.push(itemClicked);
      this.product.push(itemClicked);
      // Call the getId method in usePublisherStore and pass the $id value
      //publisherStore.getId(itemClicked.id);
      //alert(`Forgot your Password again${itemClicked}`);
    },
  },
  getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.product;
    },

    // the return type **must** be explicitly set
    doublePlusOne() {
      // autocompletion and typings for the whole store ✨
      //return this.doubleCount + 1;
      alert("purchase");
    },
  },
});
