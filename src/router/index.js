import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";
import Contact from "../views/contact.vue";

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
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
