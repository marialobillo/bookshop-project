import { defineStore } from "pinia";
//import { useBooksStore } from "./post";
//const Books = useBooksStore();

export const useSearchStore = defineStore("search", {
  state: () => ({
    books: {},
    search:{},
  }),
  actions: {
    searchForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.search} search message`);
    },
  },
  mutations: {
    addPost(state, post) {
      state.items.push(post);
    },
  },
});
