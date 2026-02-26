<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-lg font-semibold transition-colors',
      sizeClasses,
      variantClasses,
      'disabled:opacity-50 disabled:cursor-not-allowed',
      $attrs.class
    ]"
    v-bind="{ ...$attrs, class: undefined }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-orange-400 text-zinc-950 hover:bg-orange-300',
    outline: 'border border-white/10 bg-transparent text-zinc-100 hover:bg-white/10',
    ghost: 'text-zinc-100 hover:bg-white/5',
  }
  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  return sizes[props.size]
})
</script>