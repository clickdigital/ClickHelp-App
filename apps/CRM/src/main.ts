import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router/router";
import { createPinia } from "pinia";

import "./css/index.css"; // Optional: Tailwind or global styles 

import { createExampleStore } from "@clickhelp/services";         //import the store factory

const app = createApp(App);

//insert try catch block to handle errors

// ✅ Pass db to store factory
const storExample = createExampleStore();   //add firebase db to the store factory
app.provide("storExample", storExample);      //provide the store to the app

app.use(createPinia());
app.use(router);
app.mount("#app");
