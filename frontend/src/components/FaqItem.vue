<template>
  <div
    class="bg-oxigeno-black border border-oxigeno-yellow/20 rounded-xl overflow-hidden"
  >
    <button
      class="w-full px-6 py-5 flex items-center justify-between text-left"
      @click="$emit('toggle')"
    >
      <span class="text-white font-medium text-lg">{{ item.q }}</span>
      <svg
        class="w-5 h-5 text-oxigeno-yellow transform transition-transform"
        :class="open ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div v-show="open" class="px-6 pb-5">
      <p class="text-oxigeno-gray">{{ item.a }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  open: { type: Boolean, default: false },
});
defineEmits(["toggle"]);
</script>
