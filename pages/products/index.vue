<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../store/cart'; 

const config = useRuntimeConfig();
const cartStore = useCartStore();

type Country = {
  name: string
  image: string | null
}

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string; 
  is_active: boolean;
  created_at: string;
  image: Blob;
  country?: Country | null

};

const { data, pending, error } = useFetch<Product[]>(
  `${config.public.apiBase}/api/products/`
);

function mediaUrl(path?: string | null) {
  if (!path) return ""
  if (path.startsWith("http")) return path
  return `${config.public.apiBase}${path}`
}

function addToCart(product: Product) {
  cartStore.addItem({
    id: product.id,
    name: product.name,
    price: parseFloat(product.price)
  })
}

</script>

<template>
  <Navbar />
<main class="max-w-6xl mx-auto px-4 py-10">
  <h1 class="text-3xl font-bold text-white mb-8 text-center">
    Nuestro catálogo
  </h1>

  <p v-if="pending" class="text-center text-zinc-400">Cargando...</p>
  <p v-else-if="error" class="text-center text-red-400">
    Error: {{ error.message }}
  </p>

  <div
    v-else
    class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    <div
      v-for="p in data"
      :key="p.id"
      class="bg-zinc-900 border border-white/10 rounded-md overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1"
      >
      <!-- Imagen -->
      <div class="relative h-100 overflow-hidden" @click="$router.push(`/products/${p.id}`)">
        <img
          :src="p.image || '/placeholder.jpg'"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          alt="Producto"
        />
        <img v-if="p.country?.image"
          :src="mediaUrl(p.country.image)"
          class="h-25 w-25 rounded-full object-cover absolute bottom-0 right-1 border-white"
          alt="Country flag"
        />

      </div>

      <!-- Contenido -->
      <div class="p-5 flex flex-col gap-3">
        <h2 class="text-xl font-semibold text-white">
          {{ p.name }}
        </h2>

        <div class="flex items-center justify-between mt-2">
          <span class="text-orange-400 font-bold text-lg">
            ${{ p.price }} - USD
          </span>
   
            <button @click="addToCart(p)"
              class="px-4 py-2 bg-orange-500 text-sm rounded-full text-white hover:bg-orange-400 transition font-bold"
            >
              Agregar al carro
            </button>
        </div>
      </div>
    </div>
  </div>
</main>

</template>
