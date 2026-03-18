<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-oxigeno-black/95 backdrop-blur-sm border-b border-oxigeno-yellow/20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo Oxígeno"
            class="h-10 w-auto drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] rounded-full"
          />
          <div>
            <span
              class="font-bebas text-xl md:text-2xl text-oxigeno-yellow tracking-wider"
              >{{ title }}</span
            >
            <p
              class="text-[10px] text-oxigeno-gray tracking-widest hidden sm:block"
            >
              CENTRO DE ENTRENAMIENTO
            </p>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in nav"
            :key="item.href"
            :href="item.href"
            class="nav-link text-sm text-oxigeno-gray hover:text-oxigeno-yellow transition-colors"
            @click="smoothScroll"
          >
            {{ item.label }}
          </a>
        </div>

        <button
          class="md:hidden text-oxigeno-yellow p-2"
          @click="mobileOpen = !mobileOpen"
          aria-label="Abrir menú"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-show="mobileOpen"
      class="md:hidden bg-oxigeno-dark border-t border-oxigeno-yellow/20"
    >
      <div class="px-4 py-4 space-y-3">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="block text-sm text-oxigeno-gray hover:text-oxigeno-yellow transition-colors py-2"
          @click="onMobileLinkClick"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: { type: String, required: true },
});

const mobileOpen = ref(false);

const nav = [
  { href: "#inicio", label: "INICIO" },
  { href: "#planes", label: "PLANES" },
  { href: "#nosotros", label: "NOSOTROS" },
  { href: "#horarios", label: "HORARIOS" },
  { href: "#testimonios", label: "TESTIMONIOS" },
  { href: "#contacto", label: "CONTACTO" },
];

function smoothScroll(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function onMobileLinkClick(e) {
  smoothScroll(e);
  mobileOpen.value = false;
}
</script>
