<script setup lang="ts">
import { inject, ref } from "vue";
const url = ref(window.location.hostname === "clickhelp.uk");

import  HeadMenu  from "./components/PageElements/HeaderComp.vue";
import  FooterMenu  from "./components/PageElements/FooterComp.vue";

//Import the types assocoted with the store
const storExample = inject("storExample")!;
const storMain = inject("storMain")!;
const storOption = inject("storOption")!;

</script>

<template>

<!-- Catch all for live testing -->
<div v-if="url"> Coming soon!</div>

<div>
  <HeadMenu />
  {{ storMain.storName }} <br />
  {{ storMain.funcTest() }} <br />
  {{ storOption.storName }}
      <RouterView />
  <FooterMenu />
</div>


  
</template>

<style></style>