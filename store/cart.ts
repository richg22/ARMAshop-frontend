import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as {
      id: number;
      name: string;
      price: number;
      quantity: number;
    }[],
  }),
  persist: true,
  getters: {
    totalPrice(state) {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
  actions: {
    addItem(item: { id: number; name: string; price: number }) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        console.log("Updated item quantity:", existingItem);
      } else {
        this.items.push({ ...item, quantity: 1 });
        console.log("Added new item to cart:", { ...item, quantity: 1 });
      }
    },
    removeItem(itemId: number) {
      const existing = this.items.find((i) => i.id === itemId);
      if (!existing) return;

      if (existing.quantity > 1) {
        this.items = this.items.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i,
        );
      } else {
        this.items = this.items.filter((i) => i.id !== itemId);
      }
    },
    deleteItem(itemId: number) {
      this.items = this.items.filter((i) => i.id !== itemId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
