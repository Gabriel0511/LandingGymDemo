<template>
  <section id="planes" class="py-20 md:py-28 bg-oxigeno-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="font-bebas text-5xl md:text-6xl text-oxigeno-yellow tracking-wider mb-4 inline-block yellow-line"
        >
          NUESTROS PLANES
        </h2>
        <p class="text-oxigeno-gray text-lg max-w-2xl mx-auto mt-6">
          Elegí el plan que mejor se adapte a tus objetivos y empezá tu
          transformación hoy
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <PlanCard v-for="plan in plans" :key="plan.tier" :plan="plan" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PlanCard from "./PlanCard.vue";

const plans = [
  {
    tier: "BÁSICO",
    title: "MUSCULACIÓN",
    price: "$15.000",
    per: "/mes",
    ctaVariant: "outline",
    highlight: false,
    features: [
      { text: "Acceso a sala de musculación", ok: true },
      { text: "Rutina personalizada inicial", ok: true },
      { text: "Vestuarios con duchas", ok: true },
      { text: "Clases grupales", ok: false },
    ],
  },
  {
    tier: "PREMIUM",
    title: "FULL ACCESS",
    price: "$22.000",
    per: "/mes",
    ctaVariant: "solid",
    highlight: true,
    badge: "⭐ MÁS POPULAR",
    features: [
      { text: "Todo del plan Básico", ok: true },
      { text: "Clases grupales ilimitadas", ok: true },
      { text: "Spinning, Funcional, Zumba", ok: true },
      { text: "Seguimiento mensual", ok: true },
    ],
  },
  {
    tier: "VIP",
    title: "PERSONALIZADO",
    price: "$35.000",
    per: "/mes",
    ctaVariant: "outline",
    highlight: false,
    features: [
      { text: "Todo del plan Premium", ok: true },
      { text: "Entrenador personal 1 a 1", ok: true },
      { text: "Plan nutricional incluido", ok: true },
      { text: "Evaluación física semanal", ok: true },
    ],
  },
];
</script>
