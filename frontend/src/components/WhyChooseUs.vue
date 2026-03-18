<template>
  <section id="nosotros" class="py-20 md:py-28 bg-oxigeno-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="font-bebas text-5xl md:text-6xl text-oxigeno-yellow tracking-wider mb-4 inline-block yellow-line"
        >
          ¿POR QUÉ ELEGIRNOS?
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          v-for="(f, i) in features"
          :key="i"
          :title="f.title"
          :text="f.text"
        >
          <component :is="f.icon" class="w-10 h-10 text-oxigeno-yellow" />
        </FeatureCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from "./FeatureCard.vue";
import {
  IconBadgeCheck,
  IconUsers,
  IconClock,
  IconHeart,
} from "./icons/featureIcons";

const features = [
  {
    title: "EQUIPAMIENTO PRO",
    text: "Máquinas de última generación y equipos de calidad profesional",
    icon: IconBadgeCheck,
  },
  {
    title: "STAFF CAPACITADO",
    text: "Profesores certificados y especializados en cada disciplina",
    icon: IconUsers,
  },
  {
    title: "HORARIOS AMPLIOS",
    text: "Abierto de lunes a sábado con múltiples turnos disponibles",
    icon: IconClock,
  },
  {
    title: "COMUNIDAD ÚNICA",
    text: "Ambiente motivador y una familia que te apoya en cada paso",
    icon: IconHeart,
  },
];
</script>
