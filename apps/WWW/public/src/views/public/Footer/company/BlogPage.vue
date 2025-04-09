<template>
  <meta description="ClickHelp ideas and blog" />
  <meta keywords="Gardening Advice" />
    <main>
      <div class="mx-10 max-w-screen-xl">
          <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <BlogComp :records="records.foundset" />   
          </ul>
      </div> 
    </main>

  <div v-for="user in storBlog.users" :key="user.id">
    {{ user.firstname }} {{ user.lastname }}
  </div>

  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import BlogComp from "@/components/BlogComp.vue";

  import { useBlogStore } from "@/stores/storeBlog";
  const storBlog = useBlogStore();

  //get all records to pass to the component as a prop
  const records = ref(storBlog.getAllRecords);

</script>
  
<style scoped>
</style>    