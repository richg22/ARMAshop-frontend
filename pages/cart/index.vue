<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '~/store/cart';
import { Plus, Minus, Trash2, LucideTrash2 } from "lucide-vue-next";

const cartStore = useCartStore();

</script>

<template>
  <Navbar />
  <div class="bg-gradient-to-r from-zinc-100 to-zinc-300 h-10 w-full">
  </div>
  <div>
    <h1 class="text-3xl font-bold text-center mt-10">Carrito de Compras</h1>
      <div v-if="!cartStore.items || cartStore.items.length === 0" class="text-center mt-10 text-zinc-400">
      Tu carrito está vacío.
    </div>
    <div v-else class="max-w-7xl mx-auto mt-10">
      
      <div>
        <h1 v-if="cartStore.items && cartStore.items.length > 1" class="text-xl font-bold">Tus productos ({{ cartStore.items.length }}) </h1>
        <h1 v-else class="text-xl font-bold">Tu producto ({{ cartStore.items.length }}) </h1>
      </div>

      <div class="flex flex-row justify-between mt-5">
        <ul class="bg-white rounded-lg p-6 w-full shadow-md border border-gray-200">
          <li v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center py-6 px-6 shadow-md rounded-lg border border-gray-200">
            <div class="flex items-center">
              <div class="w-24 h-24 bg-gray-200 rounded-md overflow-hidden mr-4">
                <img v-if="item.image" :src="URL.createObjectURL(item.image)" alt="Product Image" class="w-full h-full object-cover">
                <div v-else class="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
              </div>
              <div class="flex-col items-start mr-4">
                <h2 class="text-lg font-semibold">{{ item.name }}</h2>
                <p class="text-sm text-zinc-700">Precio: ${{ item.price }}</p>
              </div>
            </div>
            <div class="flex justify-between p-2 items-center">
              <div class="mr-4 flex items-center justify-between"> 
                <button @click="cartStore.removeItem(item.id)" class="px-3 py-1 bg-zinc-500 text-white rounded-md hover:bg-red-600  transition-colors duration-300" :disabled="item.quantity <= 1">
                  <Minus :size="16" />
                </button>
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md mx-2 ml-4">
                  <p class="text-md font-medium">{{ item.quantity }}</p>
                </div>
                <button @click="cartStore.addItem(item)" class="ml-2 px-3 py-1 bg-zinc-700 text-white rounded-md  hover:bg-green-600 transition-colors duration-300">
                  <Plus :size="16" />
                </button>
              </div>
              <button @click="cartStore.deleteItem(item.id)"> <LucideTrash2 :size="16" class="text-red-500 hover:text-red-700" /></button>
            </div>
          </li>
        </ul>
        <div class="bg-white rounded-lg p-6 shadow-md w-96 h-80 ml-10 border border-gray-200">
          <h1 class="text-xl font-bold text-center">Resumen de tu compra</h1>
          <h1 class="text-xl font-bold text-center text-zinc-400">({{ cartStore.items.length }} productos)</h1>
          <div class="flex flex-row justify-between">
            <h2 class="text-lg font-semibold mt-15">Total</h2>
            <h2 class="text-lg font-semibold mt-15"> {{ cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) }}</h2>
          </div>
          <button class="w-full mt-5 bg-zinc-700 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300">Realizar Compra</button>
          <p class="text-sm text-zinc-700 mt-5">Impuestos incluidos. Envío calculado al finalizar la compra.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
