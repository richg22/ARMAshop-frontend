<script setup lang="ts">
import Button from "~/components/Button.vue";

const nav = [
  { label: "Home", to: "/" },
  { label: "Catálogo", to: "/products" },
  { label: "Accesorios", to: "/men" },
  { label: "Nosotros", to: "/about" },
];

const search = ref("");

</script>

<template>

  <Navbar />
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <main>
      <section class="relative h-[72vh]">
        <!-- Imagen fondo 
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/images/hero.jpg')"
        />
        -->
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/images/hero_2.gif')"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/30" />

        <!-- Contenido -->
        <div
          class="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-16"
        >
          <div class="ml-auto w-full max-w-md text-right">
            <h1
              class="text-4xl font-extrabold tracking-tight text-orange-200 md:text-5xl"
            >
              ARMAshop: Tu destino para armas y accesorios de calidad
            </h1>
            <p class="mt-3 text-sm text-zinc-100/80 md:text-base">
              Encuentra productos destacados, ofertas y colecciones nuevas cada
              semana.
            </p>

            <div class="mt-6 flex justify-end">
              <NuxtLink
                to="/shop"
                class="rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow hover:bg-orange-300"
              >
                COMPRA AHORA
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="mx-auto max-w-6xl px-4 py-10">
        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-semibold">Envío rápido</h3>
            <p class="mt-1 text-sm text-zinc-300">
              Despacho en 24–72h según tu zona.
            </p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-semibold">Pagos seguros</h3>
            <p class="mt-1 text-sm text-zinc-300">
              Tarjeta, transferencia y más.
            </p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-semibold">Devoluciones</h3>
            <p class="mt-1 text-sm text-zinc-300">
              30 días para cambios y devoluciones.
            </p>
          </div>
        </div>

        <div class="mt-6 mb-6">
          <h2 class="font-bold text-2xl text-neutral-50 text-center">
            Guías y Consejos
          </h2>
        </div>
        <div class="grid gap-4 md:grid-cols-3 text-center">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-semibold">Introducción al mundo de las armas</h3>
               <img
              class="mt-5 rounded-lg object-cover h-80 w-full"
              src="/images/int.jpg"
              alt="Cortas o largas"
            />
            <p class="mt-5 text-sm text-zinc-300">
              Si eres nuevo en el mundo de las armas, esta guía es para ti. Te
              explicamos los conceptos básicos y cómo elegir tu primera arma
            </p>
              <Button class="mt-5" variant="outline" size="md">
              Ver más
            </Button>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-semibold">¿Cortas o Largas?</h3>
              <img
              class="mt-5 rounded-lg object-cover h-80 w-full"
              src="/images/arm.jpg"
              alt="Cortas o largas"
            />
            <p class="mt-5 text-sm text-zinc-300">
              Conoce acerca del tipo de armas que tenemos disponibles para la venta y descrube cual se ajusta más a tu estilo
            </p>
             <Button class="mt-5" variant="outline" size="md">
              Descubre
            </Button>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-semibold">Teoría de la guerra II</h3>
            <img
              class="mt-5 rounded-lg h-80 w-full object-cover"
              src="/images/teg.jpg"
              alt="Teoría de la guerra II"
            />
            <p class="mt-5 text-sm text-zinc-300">
              Enterate de todo lo nuevo de nuesto libro, inspirado en las
              mejores guerras que ha expirementado la humanidad
            </p>
            <Button class="mt-5" variant="outline" size="md">
              Leer más
            </Button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
