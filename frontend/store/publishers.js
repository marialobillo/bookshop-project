import { defineStore } from "pinia";
import { useBooksStore } from "./post";
const Books = useBooksStore();

export const usePublisherStore = defineStore("Publisher", {
  state: () => ({
    items: "",
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
