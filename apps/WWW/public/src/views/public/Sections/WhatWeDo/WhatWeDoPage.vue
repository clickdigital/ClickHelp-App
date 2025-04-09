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

  const title = "What We Do";
  const menu = [
    { name: "Cleaning", href: "/whatwedo/cleaning", active: true },
    { name: "Gardening", href: "/whatwedo/gardening", active: false },
    { name: "Fixing", href: "/whatwedo/fixing", active: false },
    { name: "Decorating", href: "/whatwedo/decorating", active: false },
    { name: "Helping", href: "/whatwedo/helping", active: false },
  ];

  </script>
  
<style scoped>
</style>