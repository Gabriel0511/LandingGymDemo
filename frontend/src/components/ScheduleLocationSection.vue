<template>
  <section id="horarios" class="py-20 md:py-28 bg-oxigeno-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="font-bebas text-5xl md:text-6xl text-oxigeno-yellow tracking-wider mb-4 inline-block yellow-line"
        >
          HORARIOS Y UBICACIÓN
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <div
          class="bg-oxigeno-black border border-oxigeno-yellow/20 rounded-2xl p-8"
        >
          <h3
            class="font-bebas text-3xl text-oxigeno-yellow mb-6 flex items-center gap-3"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            HORARIOS DE ATENCIÓN
          </h3>

          <div class="space-y-4">
            <div
              class="flex justify-between items-center py-3 border-b border-oxigeno-yellow/10"
            >
              <span class="text-white font-medium">Lunes a Viernes</span>
              <span class="text-oxigeno-yellow font-bebas text-xl"
                >7:00 - 23:00</span
              >
            </div>
            <div
              class="flex justify-between items-center py-3 border-b border-oxigeno-yellow/10"
            >
              <span class="text-white font-medium">Sábados</span>
              <span class="text-oxigeno-yellow font-bebas text-xl"
                >10:00 - 13:00 y 16:00 - 20:00</span
              >
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="text-white font-medium">Domingos y Feriados</span>
              <span class="text-oxigeno-gray">Cerrado</span>
            </div>
          </div>

          <div class="mt-8 p-4 bg-oxigeno-yellow/10 rounded-xl">
            <p class="text-sm text-oxigeno-gray">
              <span class="text-oxigeno-yellow font-medium">💡 Tip:</span>
              Los mejores horarios para entrenar son temprano por la mañana o
              después de las 20hs
            </p>
          </div>
        </div>

        <div
          class="bg-oxigeno-black border border-oxigeno-yellow/20 rounded-2xl p-8"
        >
          <h3
            class="font-bebas text-3xl text-oxigeno-yellow mb-6 flex items-center gap-3"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            NUESTRA UBICACIÓN
          </h3>

          <div class="mb-6">
            <p class="text-white text-lg mb-2">📍 {{ addressText }}</p>
            <p class="text-oxigeno-gray">
              Centro de la ciudad, fácil acceso y estacionamiento disponible
            </p>
          </div>

          <div
            class="rounded-xl overflow-hidden border border-oxigeno-yellow/20"
          >
            <iframe
              class="grayscale hover:grayscale-0 transition-all duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108933.20815598695!2d-64.27419154784414!3d-31.40114002773322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb03a679a53b0b092!2zQ8OzcmRvYmEsIEFyZ2VudGluYQ!5e0!3m2!1ses-419!2sar!4v1709240000000!5m2!1ses-419!2sar"
              width="100%"
              height="250"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  addressText: { type: String, required: true },
});
</script>
