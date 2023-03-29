import { defineStore } from "pinia";
import axios from "axios";

export const useTestStore = defineStore("test", {
  state: () => ({
    users: [
      { id: 1, name: "Jane" },
      { id: 2, name: "linda" },
      { id: 3, name: "Mary" },
      { id: 4, name: "Winnie" },
    ],
  }),
  actions: {
    searchForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.search} search message`);
    },
    async fetchUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.users = response.data;
    },
  },
  mutations: {
    addPost(state, post) {
      state.items.push(post);
    },
  },
});
