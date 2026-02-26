<script setup lang="ts">
const props = defineProps<{
  videoId: string | null | undefined
  title?: string
}>()

// Sanitiza: solo permite caracteres típicos de ID de YouTube
const safeId = computed(() => {
  const id = (props.videoId || "").trim()
  return /^[a-zA-Z0-9_-]{6,20}$/.test(id) ? id : ""
})

const embedUrl = computed(() =>
  safeId.value ? `https://www.youtube.com/embed/${safeId.value}` : ""
)
</script>

<template>
  <div class="w-full">
    <div
      v-if="embedUrl"
      class="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black"
      style="padding-top: 56.25%;"  <!-- 16:9 -->
    >
      <iframe
        class="absolute inset-0 h-full w-full"
        :src="embedUrl"
        :title="title || 'YouTube video player'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      />
    </div>

    <p v-else class="text-sm text-zinc-400">
      No hay video disponible para este producto.
    </p>
  </div>
</template>
