<template>
  <div class="p-4 bg-slate-100">
    <h2 class="text-xl font-semibold">Home View Page</h2>
    <!-- <p>{{ storMain.count }}{{ storMain.name }}</p> -->
  </div>

  <h2>storExample</h2>
  <button @click="storExample.readRecords">Read Records</button>
  <button @click="storExample.createRecord({ name: 'New Item', createdAt: Timestamp.now() })">Create Record</button>
  <br />
  {{ storExample }}

</template>

<script setup lang="ts">
import { inject } from "vue";
import { Timestamp } from "firebase/firestore";

//Import types, inject store into form as a factory, check it exists, make it available
import { ExampleStoreFactory } from "../services/types/example";   //Had an an import option ExampleStore
const useExampleStore = inject("storExample") as ExampleStoreFactory;
if (!useExampleStore) throw new Error("storExample not provided");
const storExample = useExampleStore(); // ✅ now this works!
</script>


