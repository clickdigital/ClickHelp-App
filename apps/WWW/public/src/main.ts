import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router/router";
import { createPinia } from "pinia";
import { registerStores } from "@clickhelp/services";   //import stores from @clickhelp/services

import "./css/index.css"; // Optional: Tailwind or global styles 

const app = createApp(App);

// ✅ First, install Pinia
const pinia = createPinia();
app.use(pinia);

// ✅ register the stores with the app
registerStores(app);

// ✅ Add router and mount the app
app.use(router);
app.mount("#app");