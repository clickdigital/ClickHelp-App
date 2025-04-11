<script setup lang="ts">
import { inject, ref } from "vue";
import Example from "./views/TestStuff/ExampleForm"; //Import the ExampleForm component
import HomeView from "./views/TestStuff/HomeView.vue"; //Import the HomeView component

const url = ref(window.location.hostname === "clickhelp.uk");

//Import the types assocoted with the store
const storExample = inject("storExample")!;
const storMain = inject("storMain")!;
const storOption = inject("storOption")!;
const storAuth = inject("storAuth")!;



console.log("user:", storAuth.user);

</script>

<template>

<div v-if="url">
  Coming soon!
</div>


<div v-else class="p-5"> 
  <div class="P-5">
    <h1 class="text-3xl font-bold">CRM App</h1>
    <p>App view content here</p>
    <HomeView />
  </div>
</div>  


  
</template>

<style>
input:focus {outline: none;}
.firebase-emulator-warning { display: none; }
</style>