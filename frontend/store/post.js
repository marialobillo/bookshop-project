// store/auth.js
//where all the books will be

import { defineStore } from "pinia";
export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [
      { id: 1, name: "kifo mauti" },
      { id: 2, name: "lisilobidi" },
      { id: 3, name: "penzi la mama" },
      { id: 4, name: "uwa na waridi" },
    ],
    products: [
      { id: 1, name: "Product 1", image: "image1.jpg", price: 10 },
      { id: 2, name: "Product 2", image: "image2.jpg", price: 20 },
      { id: 3, name: "Product 3", image: "image3.jpg", price: 30 },
      { id: 4, name: "Product 4", image: "image4.jpg", price: 40 },
      { id: 5, name: "Product 5", image: "image5.jpg", price: 50 },
      { id: 6, name: "Product 6", image: "image6.jpg", price: 60 },
      { id: 7, name: "Product 7", image: "image7.jpg", price: 70 },
      { id: 8, name: "Product 8", image: "image8.jpg", price: 80 },
    ],
  }),
  actions: {
    addForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.id} login message`);
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
