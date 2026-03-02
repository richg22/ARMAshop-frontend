<script lang="ts" setup>
import { ShoppingCart, Store, UserRound } from "lucide-vue-next";
const nav = [
  { label: "Home", to: "/" },
  { label: "Catálogo", to: "/products" },
  { label: "Accesorios", to: "/" },
  { label: "Nosotros", to: "/" },
];

const showLogin = ref(false);
const search = ref("");
</script>

<template>
  <footer
    class="bottom-0 left-0 right-0 bg-zinc-700 text-zinc-100 w-full h-80 flex"
  >
    <div class="flex justify-center items-center h-full w-96 mx-auto">
      <div class="w-48 h-48 bg-gray-200 rounded-md overflow-hidden mr-4">
        <h1 class="text-gray-950 text-center">foto logo</h1>
      </div>
    </div>

    <div
      class="flex justify-center items-center h-full w-4xl mx-auto text-white"
    >
      <ul class="flex flex-col gap-2 p-2 justify-start items-start">
        <li class="text-center">Mundo pc Factory</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
      </ul>
      <ul class="flex flex-col gap-2 p-2 justify-start items-start">
        <li class="text-center">Mundo pc Factory</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
      </ul>
      <ul class="flex flex-col gap-2 p-2 justify-start items-start">
        <li class="text-center">Mundo pc Factory</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
      </ul>
      <ul class="flex flex-col gap-2 p-2 justify-start items-start">
        <li class="text-center">Mundo pc Factory</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
        <li class="text-center">Email</li>
      </ul>
    </div>
  </footer>
</template>

<style></style>
