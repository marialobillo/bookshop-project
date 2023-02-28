// store/auth.js
//where all the books will be

import { defineStore } from "pinia";
export const useBooksStore = defineStore("books", {
  state: () => ({
    items: "",
    books: ["kifo mauti", "lisilobidi", "penzi la mama", "uwa na waridi"],
  }),
  actions: {
    addForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.email} login message`);
    },
    someFunction() {
      // Send the form data to the server or display a thank you message
      alert(`Forgot your Password again`);
    },
  },
  mutations: {
    addPost(state, post) {
      state.items.push(post);
    },
  },
});
