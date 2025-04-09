<template>
  <section>
      <tabMenu :records="menu" :title="title" />
    </section>
   <main class="mx-auto w-full max-w-screen-xl my-3">
      <RouterView />
    </main>
  </template>

<script setup lang="ts">
  
import tabMenu from "@/components/tabComp.vue"

const title = "Support";
const menu = [
  { name: "Support", href: "/questions/support", active: true },
  { name: "FAQ's", href: "/questions/faqs", active: false },
  { name: "Media", href: "/questions/media", active: false },
  { name: "Site Map", href: "/questions/sitemap", active: false },
];

</script>

<style scoped>
</style>