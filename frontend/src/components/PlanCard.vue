<template>
  <div
    :class="[
      'rounded-2xl p-8 card-hover relative',
      plan.highlight
        ? 'bg-gradient-to-b from-oxigeno-yellow/20 to-oxigeno-black border-2 border-oxigeno-yellow transform md:scale-105'
        : 'bg-oxigeno-black border border-oxigeno-yellow/20',
    ]"
  >
    <div
      v-if="plan.badge"
      class="absolute -top-4 left-1/2 -translate-x-1/2 bg-oxigeno-yellow text-oxigeno-black px-4 py-1 rounded-full text-sm font-bold"
    >
      {{ plan.badge }}
    </div>

    <div class="text-center">
      <span
        :class="[
          'inline-block px-4 py-1 rounded-full text-sm font-medium mb-4',
          plan.highlight
            ? 'bg-oxigeno-yellow/20 text-oxigeno-yellow'
            : 'bg-oxigeno-yellow/10 text-oxigeno-yellow',
        ]"
      >
        {{ plan.tier }}
      </span>

      <h3 class="font-bebas text-3xl text-white mb-2">{{ plan.title }}</h3>

      <div class="mb-6">
        <span class="font-bebas text-5xl text-oxigeno-yellow">{{
          plan.price
        }}</span>
        <span class="text-oxigeno-gray">{{ plan.per }}</span>
      </div>

      <ul class="text-left space-y-3 mb-8">
        <li
          v-for="(f, idx) in plan.features"
          :key="idx"
          class="flex items-center gap-3"
          :class="
            f.ok
              ? plan.highlight
                ? 'text-white'
                : 'text-oxigeno-gray'
              : 'text-oxigeno-gray/50'
          "
        >
          <svg
            class="w-5 h-5 flex-shrink-0"
            :class="f.ok ? 'text-oxigeno-yellow' : ''"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              v-if="f.ok"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            />
            <path
              v-else
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            />
          </svg>
          {{ f.text }}
        </li>
      </ul>

      <a
        href="#contacto"
        class="block w-full font-bold py-3 rounded-lg transition-all text-center"
        :class="
          plan.ctaVariant === 'solid'
            ? 'bg-oxigeno-yellow text-oxigeno-black hover:bg-oxigeno-yellowDark'
            : 'border-2 border-oxigeno-yellow text-oxigeno-yellow hover:bg-oxigeno-yellow hover:text-oxigeno-black'
        "
      >
        ELEGIR PLAN
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan: { type: Object, required: true },
});
</script>
