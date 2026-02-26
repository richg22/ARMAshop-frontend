<script setup lang="ts">
import { Play, Pause } from "lucide-vue-next";

const src = "/music/tornado-of-souls.mp3";

const audio = ref<HTMLAudioElement | null>(null);

const isReady = ref(false);
const isPlaying = ref(false);

const current = ref(0);
const duration = ref(0);

const volume = ref(0.8);
const muted = ref(false);

const hasError = ref(false);
const errorMsg = ref("");

function resetState() {
  isReady.value = false;
  isPlaying.value = false;
  current.value = 0;
  duration.value = 0;
  hasError.value = false;
  errorMsg.value = "";
}

onMounted(() => {
  resetState();
  // fuerza a que el browser intente cargar metadata al montar
  queueMicrotask(() => {
    audio.value?.load();
  });
});

onUnmounted(() => {
  // cleanup real: detener audio
  if (audio.value) {
    audio.value.pause();
    audio.value.currentTime = 0;
  }
  resetState();
});

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function onLoaded() {
  const a = audio.value;
  if (!a) return;

  hasError.value = false;
  errorMsg.value = "";

  duration.value = Number.isFinite(a.duration) ? a.duration : 0;
  a.volume = volume.value;
  isReady.value = duration.value > 0 || a.readyState >= 2;
}

function onCanPlay() {
  isReady.value = true;
}

function onTimeUpdate() {
  const a = audio.value;
  if (!a) return;
  current.value = a.currentTime || 0;
}

function onPlay() {
  isPlaying.value = true;
}
function onPause() {
  isPlaying.value = false;
}

function onError() {
  const a = audio.value;
  const code = a?.error?.code;

  const msg =
    code === 1
      ? "Carga abortada."
      : code === 2
        ? "Error de red cargando el audio."
        : code === 3
          ? "El audio no se pudo decodificar (formato/archivo)."
          : code === 4
            ? "No se encontró el archivo o el formato no es soportado."
            : "No se pudo cargar el audio.";

  hasError.value = true;
  errorMsg.value = `${msg} (src: ${src})`;
  isReady.value = false;
  isPlaying.value = false;
}

async function togglePlay() {
  const a = audio.value;
  if (!a) return;

  // Permite reintentar aunque no esté "ready"
  if (!isReady.value || hasError.value) {
    hasError.value = false;
    errorMsg.value = "";
    a.load();
  }

  try {
    if (isPlaying.value) a.pause();
    else await a.play();
  } catch (err) {
    hasError.value = true;
    errorMsg.value =
      "El navegador bloqueó la reproducción (revisa consola) o el audio no está disponible.";
    console.log("PLAY ERROR", err);
  }
}

function seek(e: Event) {
  const a = audio.value;
  if (!a) return;
  const v = Number((e.target as HTMLInputElement).value);
  a.currentTime = v;
}

watch(volume, (v) => {
  if (!audio.value) return;
  audio.value.volume = v;
});

function toggleMute() {
  if (!audio.value) return;
  muted.value = !muted.value;
  audio.value.muted = muted.value;
}
</script>

<template>
  <div
    class="fixed bottom-4 left-4 z-50 rounded-2xl border border-white/10 bg-zinc-950/90 p-4 text-zinc-100 shadow-xl backdrop-blur"
  >
    <div class="flex items-center gap-3">
      <img
        src="/images/Megadeth-RustInPeace.jpg"
        alt="Tornado of Souls"
        class="h-12 w-12 rounded-lg object-cover"
      />

      <div class="flex-1">
        <p class="truncate text-sm font-semibold">Tornado of Souls</p>

        <div class="mt-2 flex items-center">
          <span class="w-12 text-xs text-zinc-300">{{
            formatTime(current)
          }}</span>

          <input
            class="w-full accent-orange-400"
            type="range"
            min="0"
            :max="duration || 0"
            step="0.1"
            :value="current"
            :disabled="!duration"
            @input="seek"
          />

          <span class="w-12 text-right text-xs text-zinc-300">{{
            formatTime(duration)
          }}</span>
        </div>
      </div>

      <button
        class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
        @click="togglePlay"
        :title="isPlaying ? 'Pausar' : 'Reproducir'"
      >
        <Play v-if="!isPlaying" class="h-5 w-5" />
        <Pause v-else class="h-5 w-5" />
      </button>
      <audio
        ref="audio"
        :src="src"
        preload="auto"
        @loadedmetadata="onLoaded"
        @canplay="onCanPlay"
        @timeupdate="onTimeUpdate"
        @play="onPlay"
        @pause="onPause"
        @error="onError"
      />
    </div>
  </div>
</template>
