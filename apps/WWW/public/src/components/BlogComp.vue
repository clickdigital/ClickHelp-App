<template>
     <div v-for="(record) in records" :key="record.card_header">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-3">
            <img class="rounded-t-lg" :src="record.card_image" alt=""> 
            <div class="p-5">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{{ record.card_header }}</h5>
                <p class="font-normal text-gray-700 mb-3">{{ record.card_intro }}</p>
                
                <button @click="showCardDetail(record.id)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                </button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";
import type { BlogInterface } from "@/components/Interface/Interface"     // "type" means import as type not code 
import { defineProps } from "vue";
defineProps<BlogInterface>()

const showCardDetail = (id:string) => {
    router.push({ name: 'BlogDetail', params: { id: id } });
}

</script>
