

<template>
  <div class="p-4 bg-slate-100">
    <h2 class="text-xl font-semibold">Home View Page</h2>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { Timestamp } from "firebase/firestore";
import LoginForm from "../Public/LoginForm.vue"; //Import the LoginForm component

//Import types, inject store into form as a factory, check it exists, make it available
const storExample = inject("storExample")!;
</script>


