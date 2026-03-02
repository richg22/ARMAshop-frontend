<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cart";
import { Circle, ShoppingCart } from "lucide-vue-next";

const cartStore = useCartStore();
</script>

<template>
    <div class=""> 
        <ShoppingCart :size="24" class="text-zinc-100" />
        <h1>{{ cartStore.totalItems }}</h1>
    </div>
</template>

<style></style> 