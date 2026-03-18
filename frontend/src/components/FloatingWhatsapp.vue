<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-pulse-glow"
    aria-label="WhatsApp"
  >
    <WhatsappIcon class="w-7 h-7" />
  </a>
</template>

<script setup>
import { computed } from "vue";
import WhatsappIcon from "./icons/WhatsappIcon.vue";

const props = defineProps({
  whatsappNumber: { type: String, required: true },
});

const link = computed(() => {
  const text = encodeURIComponent("Hola! Quiero información sobre el gimnasio");
  return `https://wa.me/${props.whatsappNumber}?text=${text}`;
});
</script>
