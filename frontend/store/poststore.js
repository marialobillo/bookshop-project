import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = response.data
    },
  },
})
