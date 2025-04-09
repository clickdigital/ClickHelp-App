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

  const title = "Join Us ?";
  const menu = [
    { name: "Customer", href: "/joinus/newcustomer", active: true },
    { name: "Team member", href: "/joinus/newstaff", active: false },
  ];

  </script>
  
<style scoped>
</style>