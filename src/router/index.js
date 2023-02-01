import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
