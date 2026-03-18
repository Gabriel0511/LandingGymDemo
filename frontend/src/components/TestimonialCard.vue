<template>
  <div
    class="bg-oxigeno-dark border border-oxigeno-yellow/10 rounded-2xl p-8 card-hover"
  >
    <div class="flex items-center gap-1 mb-4">
      <span class="text-oxigeno-yellow">{{ t.stars }}</span>
    </div>

    <p class="text-oxigeno-gray mb-6 italic">{{ t.quote }}</p>

    <div class="flex items-center gap-4">
      <div
        class="w-12 h-12 rounded-full bg-oxigeno-yellow/20 flex items-center justify-center"
      >
        <span class="text-oxigeno-yellow font-bebas text-xl">{{
          t.initials
        }}</span>
      </div>
      <div>
        <p class="text-white font-medium">{{ t.name }}</p>
        <p class="text-oxigeno-gray text-sm">{{ t.meta }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  t: { type: Object, required: true },
});
</script>
