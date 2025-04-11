<template> 
<!-- Content visible on small screens -->
  <div class="block lg:hidden">
      <div class="p-1 border-b flex items-center justify-between">
        <span class="text-gray-700 font-semibold font-dm text-lg ml-3">{{title}}</span>
        <div v-if="menuVisible">
          <ChevronUpIcon
            @click="showMenu"
            class="cursor-pointer h-8 w-8 text-gray-600"
            alt="hide main menu"
          />
        </div>
        <div v-else>
          <ChevronDownIcon
            @click="showMenu"
            class="cursor-pointer h-8 w-8 text-gray-600"
            alt="show main menu"
          />
        </div>
      </div>

      <transition name="fade-slide">
        <div v-if="menuVisible" class="mt-0">
            <!-- Add your dropdown menu content here -->
            <ul class="bg-gray-100 shadow-md" v-for="(record, index) in records" :key="record.name" >
              <router-link :to="record.href" class="text-gray-700 dark:hover:text-white">
                <li class="px-4 py-2 hover:bg-gray-200" @click="selectedTab.value = (index+1)">{{record.name}}</li>
              </router-link>
            </ul>
        </div>
      </transition>
  </div>

<!-- Content visible on large screens -->
  <div class="hidden lg:block">
    <div class="mx-auto w-full max-w-screen-xl px-8">
      <div class="p-5 border-b border-slate-200 py-2 md:flex md:items-center md:justify-between">
        <span class="text-gray-700 font-semibold font-dm text-xl">{{title}}</span>
        <div class="flex mt-1 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse font-normal text-sm">

          <div v-for="(record, index) in records" :key="record.name">
              <router-link :to="record.href" class="text-gray-700 dark:hover:text-white">
                <span 
                class="mx-2 hover:text-gray-900"
                :class="{ 'border-solid border-2 border-transparent border-b-indigo-600 p-1': selectedTab === (index+1) }"
                @click="selectedTab.value = (index + 1)">
                {{record.name}}{{selectedTab}}
              </span>
              </router-link>        
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import type { TabInterface } from "@/components/Interface/Interface"     // "type" means import as type not code 
import { defineProps } from "vue";
defineProps<TabInterface>()

const selectedTab = ref(2);

let menuVisible = ref(false);

function showMenu() {
  menuVisible.value = !menuVisible.value;
  console.log('Selected Tab:', selectedTab.value);
}

</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>