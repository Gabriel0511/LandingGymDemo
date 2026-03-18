<template>
  <section
    id="inicio"
    class="hero-gradient relative overflow-hidden flex items-center justify-center pt-16 md:pt-20 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]"
  >
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-oxigeno-yellow rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-oxigeno-yellow rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in"
    >
      <div class="mb-6">
        <div class="mb-6">
          <img
            src="/logo.png"
            alt="Oxígeno"
            class="w-32 md:w-40 mx-auto rounded-full"
          />
        </div>
      </div>

      <h1
        class="font-bebas text-6xl md:text-8xl lg:text-9xl text-oxigeno-yellow tracking-wider mb-4"
      >
        {{ config.heroTitle }}
      </h1>

      <p class="text-oxigeno-gray text-lg md:text-xl tracking-[0.3em] mb-6">
        CENTRO DE ENTRENAMIENTO
      </p>

      <p
        class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        {{ config.heroSubtitle }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#planes"
          class="inline-block bg-oxigeno-yellow text-oxigeno-black font-bold px-8 py-4 rounded-lg hover:bg-oxigeno-yellowDark transition-all transform hover:scale-105 tracking-wider"
        >
          VER PLANES
        </a>

        <a
          :href="waLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 border-2 border-oxigeno-yellow text-oxigeno-yellow font-bold px-8 py-4 rounded-lg hover:bg-oxigeno-yellow hover:text-oxigeno-black transition-all tracking-wider"
        >
          <WhatsappIcon class="w-5 h-5" />
          CONTACTAR
        </a>
      </div>
    </div>

    <!-- Scroll hint (líneas + flecha) -->
    <div
      class="absolute inset-x-0 bottom-8 flex justify-center animate-bounce pointer-events-none"
    >
      <svg
        class="w-6 h-6 text-oxigeno-yellow"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import WhatsappIcon from "./icons/WhatsappIcon.vue";

const props = defineProps({
  config: { type: Object, required: true },
});

const waLink = computed(() => `https://wa.me/${props.config.whatsappNumber}`);

const StatBlock = {
  props: { value: String, label: String },
  template: `
    <div class="text-center">
      <p class="font-bebas text-4xl text-oxigeno-yellow">{{ value }}</p>
      <p class="text-sm">{{ label }}</p>
    </div>
  `,
};
</script>
