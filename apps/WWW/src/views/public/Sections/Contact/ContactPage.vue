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

  const title = "Contact";
  const menu = [
    { name: "Locations", href: "/Contact/locations", active: true },
  ];
  
  </script>
  
<style scoped>
</style>