import { defineStore } from "pinia";
//import { usePublisherStore } from "./publishers";
//const publisherStore = usePublisherStore();

export const usePurchasedItem = defineStore("PurchasedItem", {
  state: () => ({ Purchase: [] }),
  actions: {
    someFunction(itemClicked) {
      //product push product to the empty array
      // Send the form data to the server or display a thank you message
      //this.Purchase = Purchase.push(itemClicked);
      this.Purchase.push(itemClicked);
      // Call the getId method in usePublisherStore and pass the $id value
      //publisherStore.getId(itemClicked.id);
      //alert(`Forgot your Password again${itemClicked}`);
    },
    removeItem(index) {
      // Use the splice method to remove the item at the given index from the Purchase array
      this.Purchase.splice(index, 1);
    },
    totalPurchase(itemClicked) {
      return itemClicked.length;
    },
  },
});
