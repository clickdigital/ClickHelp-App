<script setup lang="ts">
import { inject, ref } from "vue";
import Example from "./views/ExampleForm.vue"; //Import the ExampleForm component
const url = ref(window.location.hostname === "clickhelp.uk");

//Import the types assocoted with the store
import { ExampleStoreFactory } from "./services/types/example";   //Had an an import option ExampleStore
const useExampleStore = inject("storExample") as ExampleStoreFactory;
if (!useExampleStore) throw new Error("storExample not provided");
const storExample = useExampleStore(); // ✅ now this works!

//Show store name to prove store is connecting
const getName = () => {
  console.log("Store name is:", storExample.storName);
}

</script>

<template>

<div v-if="url">
  Coming soon!
</div>


<div v-else class="p-5">
  
  <div class="P-5">
    <h1 class="text-3xl font-bold">CRM App</h1>
    <p>App view content here</p>
  </div>
  
  <Example />
  
</div>  


  
</template>

<style>
input:focus {outline: none;}
.firebase-emulator-warning { display: none; }
</style>