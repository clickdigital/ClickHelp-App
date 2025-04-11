<template>
    <main>
      <!-- Hero Section-->
      <section class="mx-auto w-full max-w-screen-lg"> 
        <div class="border-b">
          <h1 class="p-5 mx-10 mt-10 mb-2 text-gray-900 font-semibold font-dm text-5xl text-center">Frequently Asked Questions</h1>
          <AccordionComp :records="records.foundset" />
        </div>
    </section>
    </main>
  </template>
  
<script setup lang="ts">
  import { ref } from "vue";  
  import AccordionComp from "@/components/AccordionComp.vue";   //Accordion Component
  import { useFAQStore } from "@/stores/storeFAQs";
  const storFAQs = useFAQStore();

  const records = ref(storFAQs.getAllRecords);  //Data passed into accordion component 

</script>
  
<style scoped>
</style>