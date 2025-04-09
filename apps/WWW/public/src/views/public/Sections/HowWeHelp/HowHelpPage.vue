<template>
  <nav>
      <tabMenu :records="menu" :title="title" />
    </nav>
   <main class="mx-auto w-full max-w-screen-xl my-3">
      <RouterView />
    </main>
  </template>
  
  <script setup lang="ts">
 
  import tabMenu from "@/components/tabComp.vue"

  const title = "How we help";
  const menu = [
    { name: "Helpers", href: "/howcanwehelp/helper", active: true },
    { name: "Inside", href: "/howcanwehelp/inside", active: false },
    { name: "Outside", href: "/howcanwehelp/outside", active: false },
  ];

  </script>
  
<style scoped>
</style>