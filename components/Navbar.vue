<script lang="ts" setup>
import { ShoppingCart, Store, UserRound } from "lucide-vue-next";
const nav = [
  { label: "Home", to: "/" },
  { label: "Catálogo", to: "/products" },
  { label: "Accesorios", to: "/" },
  { label: "Nosotros", to: "/" },
];

const showLogin = ref(false)
const search = ref("");

</script>

<template>
  <div class=" bg-zinc-950 text-zinc-100">
      <div class="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-semibold tracking-wide"
        >
          <span>ARMAshop</span>
        </NuxtLink>

        <nav class="hidden flex-1 items-center gap-6 md:flex justify-center">
          <NuxtLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="text-sm text-zinc-300 hover:text-orange-300"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center md:flex">
          <div class="relative">
            <input
              v-model="search"
              type="text"
              placeholder="Buscar..."
              class="w-72 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-white/20"
            />
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
            title="Cart" 
          >
          <ShoppingCart />
          </button>
          <button
            class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
            title="login"
            @click="showLogin = true"
          >
            <UserRound />
          </button>
          <LoginModal :open="showLogin" @close="showLogin = false" />
        </div>
      </div>

      <!-- Mobile nav -->
      <div class="mx-auto max-w-6xl px-4 pb-3 md:hidden">
        <div class="flex gap-3 overflow-x-auto">
          <NuxtLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="mt-3">
          <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-white/20"
          />
        </div>
      </div>
  </div>
</template>

  
<style>

</style>