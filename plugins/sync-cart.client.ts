import { useCartStore } from "~/store/cart";

export default defineNuxtPlugin(() => {
  if (process.client) {
    const cartStore = useCartStore();

    // Sincronizar cambios desde otras pestañas
    window.addEventListener("storage", (event) => {
      if (event.key === "cart") {
        if (event.newValue) {
          try {
            const data = JSON.parse(event.newValue);
            cartStore.$patch(data);
            console.log("Carrito sincronizado desde otra pestaña:", data);
          } catch (e) {
            console.error("Error sincronizando carrito:", e);
          }
        }
      }
    });

    // Guardar cambios en localStorage cuando el store cambia
    cartStore.$subscribe((mutation, state) => {
      localStorage.setItem("cart", JSON.stringify(state));
      console.log("Carrito guardado en localStorage:", state);
    });
  }
});
