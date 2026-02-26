<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
const emit = defineEmits(["close"])

const config = useRuntimeConfig()

const form = reactive({
  username: "",
  password: "",
})

const errorMsg = ref("")
const loading = ref(false)

async function login() {
  errorMsg.value = ""
  loading.value = true
  try {
    const res = await $fetch<{ access: string; refresh: string }>(
      `${config.public.apiBase}/api/auth/token/`,
      { method: "POST", body: form }
    )

    localStorage.setItem("access", res.access)
    localStorage.setItem("refresh", res.refresh)

    emit("close")
  } catch (e) {
    errorMsg.value = "Credenciales inválidas"
  } finally {
    loading.value = false
  }
}

function closeModal() {
  emit("close")
}
</script>

<template>
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
      
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="closeModal"
      />

      <!-- Modal -->
      <div class="relative z-10 w-full max-w-md rounded-2xl bg-zinc-900 p-8 shadow-2xl border border-white/10">
        
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Login - ARMAshop
        </h2>

        <form class="space-y-4" @submit.prevent="login">
          <input
            v-model="form.username"
            placeholder="Usuario"
            class="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder:text-zinc-400"
          />

          <input
            v-model="form.password"
            type="password"
            placeholder="Contraseña"
            class="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder:text-zinc-400"
          />

          <p v-if="errorMsg" class="text-red-400 text-sm">
            {{ errorMsg }}
          </p>

          <button
            :disabled="loading"
            class="w-full rounded-full bg-orange-500 p-3 font-semibold text-white hover:bg-orange-400 transition disabled:opacity-50"
          >
            {{ loading ? "Entrando..." : "Entrar" }}
          </button>
        </form>
        <h1 class="text-center text-sm text-zinc-400 mt-4">¿No estás registrado?</h1>
        <a href="/register" class="block text-center text-sm text-orange-400 hover:underline">
          Crea una cuenta
        </a>
        <button
          class="absolute top-4 right-4 text-zinc-400 hover:text-white"
          @click="closeModal"
        >
          ✕
        </button>
      </div>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>