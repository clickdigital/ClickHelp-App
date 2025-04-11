import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router/router";
import { createPinia } from "pinia";

// ✅ registerStores is a wrapper in @clickhelp/services for all the stores
// IMPORTANT: make sure you build and commit services before running the app
import { registerStores } from "@clickhelp/services";   //import stores from @clickhelp/services 

import "./services/css/index.css"; // Optional: Tailwind or global styles 

const app = createApp(App);

// ✅ First, install Pinia, before stores are initalised
const pinia = createPinia();
app.use(pinia);

// ✅ register the stores with the app - on each page use storExample = inject("storExample")!;
registerStores(app);

app.use(router);
app.mount("#app");
