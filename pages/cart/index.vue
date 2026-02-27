<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '~/store/cart';
import { Plus, Minus } from "lucide-vue-next";

const cartStore = useCartStore();

</script>

<template class="bg-zinc-900">
  <Navbar />
  <div>
    <h1 class="text-3xl font-bold text-center mt-10">Carrito de Compras</h1>
      <div v-if="!cartStore.items || cartStore.items.length === 0" class="text-center mt-10 text-zinc-400">
      Tu carrito está vacío.
    </div>
    <div v-else class="max-w-4xl mx-auto mt-10">
      
      <div>
        <h1 v-if="cartStore.items && cartStore.items.length > 1" class="text-xl font-bold">Tus productos ({{ cartStore.items.length }}) </h1>
        <h1 v-else class="text-xl font-bold">Tu producto ({{ cartStore.items.length }}) </h1>
      </div>

      <ul class="bg-white rounded-lg p-6">
        <li v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center py-5 px-6 shadow-md rounded-lg">
          <div>
            <h2 class="text-lg font-semibold">{{ item.name }}</h2>
            <p class="text-sm text-zinc-700">Precio: ${{ item.price }}</p>
          </div>
          <div class="flex justify-between p-2 items-center">
            <div class="mr-4 flex items-center justify-between"> 
              <button @click="cartStore.removeItem(item.id)" class="px-3 py-1 bg-zinc-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
                <Minus :size="16" />
              </button>
              <p class="text-md font-medium ml-2">{{ item.quantity }}</p>
              <button @click="cartStore.addItem(item)" class="ml-2 px-3 py-1 bg-zinc-700 text-white rounded-md hover:bg-red-600 transition-colors duration-300" :disabled="item.quantity <= 1">
                <Plus :size="16" />
              </button>
            </div>
            <Button @click="cartStore.deleteItem(item.id)">Borrar Item</Button>
          </div>
        </li>
      </ul>
      <h1 class="text-xl font-bold mt-4">Total: ${{ cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) }}</h1>
    </div>
  </div>
</template>

<style></style>
