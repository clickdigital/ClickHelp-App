<template>
  <div class="flex flex-col w-full">
    <div v-for="(record, index) in records" :key="index" class="mb-2">
      <button
        @click="toggle(index)"
        class="py-2 px-4 w-full text-left bg-gray-200 hover:bg-gray-300"
      >
        {{ record.title }}
      </button>
      <div v-if="isOpen(index)" class="p-4 bg-gray-100">
        {{ record.content }} {{ record.expiry }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { AccordionInterface } from "@/components/Interface/Interface"     // "type" means import as type not code 
import { defineProps } from "vue";
defineProps<AccordionInterface>()

//open-close functionality
const openIndex = ref(-1)

const toggle = (index:number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const isOpen = (index:number) => {
  return openIndex.value === index
}
</script>
