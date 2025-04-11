<template>
  <section>
      <tabMenu :records="menu" :title="title" />
    </section>
   <main class="mx-auto w-full max-w-screen-xl my-3">
      <RouterView />
    </main>
  </template>

<script setup lang="ts">
  
import { ref } from 'vue';
import { onBeforeMount } from "vue";
import router from "@/router/";
import tabMenu from "@/components/tabComp.vue"

const title = "Legals";
const menu = ref([
  { name: "T&Cs", href: "/legal/termsandconditions", active: true },
  { name: "Privacy", href: "/legal/privacy", active: false },
  { name: "GDPR", href: "/legal/gdpr", active: false },
  { name: "Cookies", href: "/legal/cookies", active: false },
]);

</script>

<style scoped>
</style>