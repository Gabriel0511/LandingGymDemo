<template>
  <div class="min-h-full bg-oxigeno-black font-inter text-white overflow-auto">
    <Navbar :title="config.heroTitle" />
    <main class="w-full">
      <HeroSection :config="config" />
      <PlansSection />
      <WhyChooseUs />
      <ScheduleLocationSection :addressText="config.addressText" />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection :config="config" />
      <FooterSection :title="config.heroTitle" />
    </main>
    <FloatingWhatsapp :whatsappNumber="config.whatsappNumber" />
  </div>
</template>

<script setup>
import { siteConfig as config } from "./data/siteConfig";

import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import PlansSection from "./components/PlansSection.vue";
import WhyChooseUs from "./components/WhyChooseUs.vue";
import ScheduleLocationSection from "./components/ScheduleLocationSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import FaqSection from "./components/FaqSection.vue";
import CtaSection from "./components/CtaSection.vue";
import FooterSection from "./components/FooterSection.vue";
import FloatingWhatsapp from "./components/FloatingWhatsapp.vue";
</script>
