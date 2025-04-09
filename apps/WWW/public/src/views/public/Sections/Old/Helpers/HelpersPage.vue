<template>
  <section>
      <tabMenu :records="menu" :title="title" />
    </section>
   <main class="mx-auto w-full max-w-screen-xl my-3">
      <RouterView />
    </main>
  </template>
  
  <script setup lang="ts">
    
  import { onBeforeMount } from "vue";
  import router from "@/router/";
  import tabMenu from "@/components/tabComp.vue"

  const title = "Helpers";
  const menu = [
    { name: "Team", href: "/helpers/team", active: true },
    { name: "Join us ?", href: "/helpers/jobapplication", active: false },
  ];

  onBeforeMount(() => {
    // Pre loads the first tab on inital display
    router.push("/helpers/team");
  });

  </script>
  
<style scoped>
</style>