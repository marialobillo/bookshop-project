import { createPinia } from "pinia";

export const useCounterStore = createPinia({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  actions: {
    increment(state) {
      state.count++;
    },
  },
});
