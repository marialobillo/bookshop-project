import { defineStore } from "pinia";

export const useBestsellerBooksStore = defineStore("Author", {
  state: () => ({
    id: "",
    name: "",
    product: [],
  }),
  actions: {
    addForm() {
      // Send the form data to the server or display a thank you message
      alert(`previous function best `);
    },
    someFunction() {
      // Send the form data to the server or display a thank you message
      alert(`should go ${this.name}  next/buy `);
    },
    getters: {
      doubleCount(state) {
        return state.name;
      },
    },
  },
  mutations: {
    addPost(state, post) {
      state.items.push(post);
    },
  },
});
