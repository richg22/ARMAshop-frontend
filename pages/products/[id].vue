<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const { data, pending, error } = await useFetch(
  `${config.public.apiBase}/api/products/${route.params.id}/`
)

function mediaUrl(path?: string | null) {
  if (!path) return ""
  if (path.startsWith("http")) return path
  return `${config.public.apiBase}${path}`
}
</script>

<template>
  <Navbar />

  <main class="max-w-6xl mx-auto px-4 py-10">
    <p v-if="pending">Cargando...</p>
    <p v-else-if="error">Error cargando producto</p>

    <div v-else-if="data">
      <div class="flex">
        
        <div class="flex-1 bg-gray-200 rounded-md">

          
        </div>
        <!-- Imagen -->
        <div class="relative">
          <img
            :src="mediaUrl(data.image)"
            class="w-full h-full object-cover transition-transform duration-500 border border-white/10 rounded-md shadow-lg"
            alt="Producto"
          />
          <img v-if="data.country?.image"
            :src="mediaUrl(data.country.image)"
            class="h-25 w-25 rounded-full object-cover absolute bottom-0 right-1 border-white"
            alt="Country flag"
          />
        </div>

        <!-- Info -->
        <div class="flex flex-col gap-5 justify-center ml-10">
          <h1 class="text-3xl font-bold text-neutral-900">
            {{ data.name }}
          </h1>

          <p class="text-zinc-700">
            {{ data.description || "Sin descripción." }}
          </p>

          <div class="flex items-center gap-4">
            <span class="text-2xl font-bold text-orange-400">
              ${{ data.price }}
            </span>

          </div>

          <button
            class="mt-6 w-fit px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-400 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
        
      <div class="flex flex-col gap-5 justify-center ml-10 mt-10">
        <h1 class="text-3xl font-bold text-neutral-900 text-center">
        Demo
       </h1>
        <YtPlayer :video-id="data.yt_id" :title="data.name" />
      </div>

    </div>

  </main>
</template>
