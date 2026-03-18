<template>
  <section id="testimonios" class="py-20 md:py-28 bg-oxigeno-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="font-bebas text-5xl md:text-6xl text-oxigeno-yellow tracking-wider mb-4 inline-block yellow-line"
        >
          TESTIMONIOS
        </h2>
        <p class="text-oxigeno-gray text-lg max-w-2xl mx-auto mt-6">
          Lo que dicen nuestros miembros sobre su experiencia
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <TestimonialCard v-for="t in testimonials" :key="t.initials" :t="t" />
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from "./TestimonialCard.vue";

const testimonials = [
  {
    stars: "⭐⭐⭐⭐⭐",
    quote:
      '"El mejor gimnasio sin dudas. Los profesores te acompañan en todo momento y el ambiente es espectacular. Logré mis objetivos en menos tiempo del esperado."',
    initials: "ML",
    name: "María Laura",
    meta: "Miembro hace 2 años",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    quote:
      '"Empecé de cero y hoy puedo decir que cambié mi vida. Las clases de funcional son increíbles y el equipo siempre está motivándote. 100% recomendado!"',
    initials: "JC",
    name: "Juan Carlos",
    meta: "Miembro hace 1 año",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    quote:
      '"Las instalaciones son de primera, siempre limpias y ordenadas. Los horarios son muy flexibles y se adaptan a mi rutina de trabajo. ¡Gran gimnasio!"',
    initials: "AS",
    name: "Ana Sofía",
    meta: "Miembro hace 6 meses",
  },
];
</script>
