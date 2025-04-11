import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../../views/TestStuff/HomeView.vue";
import ExampleView from "../../views/TestStuff/ExampleForm.vue";


const routes = [
  /** Testing Routes */
  { path: "/examplehome", component: HomeView },
  { path: "/exampleform", component: ExampleView },

  /** Public Routes */
  //Landing page with login

  /** Secure Routes */
  //Dashboard



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;