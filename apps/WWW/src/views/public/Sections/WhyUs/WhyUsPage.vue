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

  const title = "Why us ?";
  const menu = [
    { name: "Skilled", href: "/whyus/skilled", active: true },
    { name: "Trusted", href: "/whyus/trusted", active: false },
    { name: "Safe", href: "/whyus/safe", active: false },
  ];
  </script>
  
<style scoped>
</style>