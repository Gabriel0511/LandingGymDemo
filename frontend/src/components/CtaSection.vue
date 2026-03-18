<template>
  <section
    id="contacto"
    class="py-20 md:py-28 bg-oxigeno-black relative overflow-hidden"
  >
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-oxigeno-yellow rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-oxigeno-yellow rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
    >
      <h2
        class="font-bebas text-5xl md:text-7xl text-oxigeno-yellow tracking-wider mb-6"
      >
        ¿LISTO PARA EMPEZAR?
      </h2>
      <p class="text-xl text-oxigeno-gray mb-10 max-w-2xl mx-auto">
        Contactanos ahora y comenzá tu transformación. ¡Tu mejor versión te está
        esperando!
      </p>

      <a
        :href="ctaLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-xl transition-all transform hover:scale-105 text-xl animate-pulse-glow"
      >
        <WhatsappIcon class="w-7 h-7" />
        CONTACTAR POR WHATSAPP
      </a>

      <p class="mt-6 text-oxigeno-gray">
        O llamanos al
        <span class="text-oxigeno-yellow font-medium">{{
          config.phoneText
        }}</span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import WhatsappIcon from "./icons/WhatsappIcon.vue";

const props = defineProps({
  config: { type: Object, required: true },
});

const ctaLink = computed(() => {
  const text = encodeURIComponent(
    "Hola! Quiero información sobre los planes del gimnasio",
  );
  return `https://wa.me/${props.config.whatsappNumber}?text=${text}`;
});
</script>
