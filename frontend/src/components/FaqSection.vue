<template>
  <section class="py-20 md:py-28 bg-oxigeno-dark">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="font-bebas text-5xl md:text-6xl text-oxigeno-yellow tracking-wider mb-4 inline-block yellow-line"
        >
          PREGUNTAS FRECUENTES
        </h2>
      </div>

      <div class="space-y-4">
        <FaqItem
          v-for="(item, idx) in faqs"
          :key="idx"
          :item="item"
          :open="openIndex === idx"
          @toggle="toggle(idx)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FaqItem from "./FaqItem.vue";

const faqs = [
  {
    q: "¿Puedo probar antes de inscribirme?",
    a: "¡Sí! Ofrecemos una clase de prueba gratuita para que conozcas nuestras instalaciones y el ambiente antes de tomar una decisión. Contactanos por WhatsApp para coordinar.",
  },
  {
    q: "¿Qué incluye la cuota mensual?",
    a: "Dependiendo del plan elegido, incluye acceso a la sala de musculación, vestuarios con duchas, y en los planes superiores, clases grupales ilimitadas y seguimiento personalizado.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "¡Para nada! Recibimos personas de todos los niveles. Nuestros profesores te guiarán desde el primer día con una rutina adaptada a tu condición física actual.",
  },
  {
    q: "¿Cuáles son las formas de pago?",
    a: "Aceptamos efectivo, transferencia bancaria, Mercado Pago y todas las tarjetas de débito y crédito. También ofrecemos descuentos por pago anticipado trimestral o semestral.",
  },
  {
    q: "¿Puedo congelar mi membresía?",
    a: "Sí, podés congelar tu membresía hasta por 30 días al año en casos de viaje, enfermedad u otras situaciones. Consultanos para más detalles.",
  },
];

const openIndex = ref(null);

function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx;
}
</script>
