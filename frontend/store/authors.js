import { defineStore } from "pinia";
import { useBooksStore } from "./post";
const Books = useBooksStore();

export const useAuthorStore = defineStore("Author", {
  state: () => ({
    items: [],
    books: [],
  }),
  actions: {
    addForm() {
      // Send the form data to the server or display a thank you message
      alert(`previous function`);
    },
    someFunction() {
      // Send the form data to the server or display a thank you message
      alert(`should go next `);
    },
  },
  mutations: {
    addPost(state, post) {
      state.items.push(post);
    },
  },
});
