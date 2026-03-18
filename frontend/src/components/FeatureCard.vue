<template>
  <div class="text-center group">
    <div
      class="w-20 h-20 mx-auto mb-6 bg-oxigeno-yellow/10 rounded-2xl flex items-center justify-center group-hover:bg-oxigeno-yellow/20 transition-all"
    >
      <slot />
    </div>
    <h3 class="font-bebas text-2xl text-white mb-3">{{ title }}</h3>
    <p class="text-oxigeno-gray">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
});
</script>
