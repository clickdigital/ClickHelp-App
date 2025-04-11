<template>
  <meta description="ClickHelp ideas and blog" />
  <meta keywords="Gardening Advice" />
    <main>
      <p>Received param: {{ $route.params.id }}</p>
      <br />
      record = {{ test }}


    </main>
  </template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();

  import { useBlogStore } from "@/stores/storeBlog";
  const storBlog = useBlogStore();

  storBlog.currentRecordID = String(route.params.id);

  const test = storBlog.getRecord

</script>