<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../store/cart';

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

</script>

<template>
  <Navbar />
  <div>
    <h1 class="text-3xl font-bold text-center mt-10">Carrito de Compras</h1>
      <div v-if="!items || items.length === 0" class="text-center mt-10 text-zinc-400">
      Tu carrito está vacío.
    </div>
    <div v-else class="max-w-4xl mx-auto mt-10">
      <h1>Items en el carrito:</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.quantity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
