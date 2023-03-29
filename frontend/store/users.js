import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [
      { id: 1, name: "Jane" },
      { id: 2, name: "linda" },
      { id: 3, name: "Mary" },
      { id: 4, name: "Winnie" },
    ]
  }),


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
