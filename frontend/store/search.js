import { defineStore } from "pinia";
export const useSearchStore = defineStore("search", {
  state: () => ({
    books:[
      { id: 1, name: "kifo mauti" },
      { id: 2, name: "lisilobidi" },
      { id: 3, name: "penzi la mama" },
      { id: 4, name: "uwa na waridi" },
    ],
    search: "",
    result:"",
  }),
  actions: {
    searchForm() {
      // Send the form data to the server or display a thank you message
      //search fuction
      alert(`Thank you ${this.search} search message`);
      //this.result = this.books.find(this.search)
      //console.log(this.books.find(this.search));
    },
    showSearch(){
      if(this.search.length()=1)
      {
        return true;
      }
    }
  },
  mutations: {
    addPost(state, post) {
      state.items.push(post);
    },
  },
});
