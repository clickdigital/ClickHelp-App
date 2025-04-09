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

const title = "Help Desk dd";
const menu = ref([
  { name: "Support", href: "/helpdesk/support", active: true },
  { name: "FAQ's", href: "/helpdesk/faqs", active: false },
  { name: "Contact Us", href: "/helpdesk/contact", active: false },
  { name: "Media", href: "/helpdesk/media", active: false },
]);

onBeforeMount(() => {
  // Pre loads the first tab on inital display
  router.push("/helpdesk/support");
});

</script>

<style scoped>
</style>