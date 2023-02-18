// store/modules/auth.js
import { defineStore } from "pinia";

export const UseAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {
      name: "nelson",
      email: "nelsonomondi99@gmail.com",
    },
  }),
});
