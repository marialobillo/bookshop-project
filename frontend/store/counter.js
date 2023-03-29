import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 1 }),
  getters: {
    countDigitLength: (store) => store.count.tostring().length(),
  },
  actions: {
    increment() {
      this.count++;

    },
    decrement() {
      this.count--;
      if (this.count < 0) {
        this.count = 0;
      }
    },
  },
});
