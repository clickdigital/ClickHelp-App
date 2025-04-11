<template>
  <main>
    <!-- Hero Section-->
    <section> 
        <div>
          <h1 class="p-5 mx-10 text-gray-600">Team Profile</h1>
        </div>
        <div class="p-5">
            <button
              @click="doApply"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >Job Applicaiton</button>
          </div>
    </section>
  </main>
</template>
  
  <script setup lang="ts">
 import router from "@/router";

 function doApply() {
    router.push('apply');
  };



</script>
  
<style scoped>
</style>