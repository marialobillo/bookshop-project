import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    name: null,
    email: null,
  }),

  getters: {
    getUserId: (state) => state.id,
    getUserName: (state) => state.name,
    getUserEmail: (state) => state.email,
    isLoggedIn: (state) => !!state.id,
  },

  actions: {
    async login(email, password) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          this.id = data.id;
          this.name = data.name;
          this.email = data.email;
        } else {
          throw new Error("Failed to log in.");
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async logout() {
      try {
        await fetch("/api/logout");
        this.id = null;
        this.name = null;
        this.email = null;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async fetchUser() {
      try {
        const response = await fetch("/api/user");

        if (response.ok) {
          const data = await response.json();
          this.id = data.id;
          this.name = data.name;
          this.email = data.email;
        } else {
          throw new Error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
});
