<template>
    <main>
      <!-- Hero Section-->
      <section class="mx-auto w-full max-w-screen-lg"> 
          <div class="border-b">
            <h1 class="p-5 mx-10 mt-10 mb-2 text-gray-900 font-semibold font-dm text-5xl text-center">Branch Locator</h1>
          </div>
      </section>
      <section class="mx-auto w-full max-w-screen-lg">
        <div class="my-12 text-gray-900 text-md font-normal leading-relaxed">
          <div class="font-semibold text-lg mb-2">Hampshire</div>
            <ul>
              <li class="cursor-pointer" @click="doSwitchBranch('Winchester')">Winchester</li>
              <li class="cursor-pointer" @click="doSwitchBranch('Hamble Valley')">Hamble Valley</li> 
              <li class="cursor-pointer text-zinc-300">Southampton</li>
              <li class="cursor-pointer text-zinc-300">Sailsbury</li>
              <li class="cursor-pointer text-zinc-300">Lymington</li>        
            </ul>          
        </div>
        <div class="my-12 text-gray-900 text-md font-normal leading-relaxed">
          <div class="font-semibold text-lg mb-2">Hertfordshire</div>
            <ul>
              <li class="cursor-pointer" @click="doSwitchBranch('Welwyn')">Welwyn</li>
              <li class="cursor-pointer text-zinc-300">Bishops Stortford</li>   
              <li class="cursor-pointer text-zinc-300">Harpenden</li>        
              <li class="cursor-pointer text-zinc-300">St Albans</li>        
            </ul>          
        </div>
      </section>
    </main>
</template>

<script setup lang="ts">
import { useBranchesStore } from '@/stores/storeBranches';
const storBranch = useBranchesStore();

function doSwitchBranch(branch:string) {
  storBranch.setBranch(branch);
}



</script>

<style scoped>
</style>