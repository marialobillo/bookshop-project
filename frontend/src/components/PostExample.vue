<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { usePostsStore } from "../../store/poststore";

export default {
  setup() {
    const postsStore = usePostsStore();

    postsStore.fetchPosts();

    return {
      posts: postsStore.posts,
    };
  },
};
</script>
