import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";
import Contact from "../views/contact.vue";
import Article from "../views/article.vue";

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
    {
      path: "/article",
      name: "article",
      component: Article,
    },
  ],
});

export default router;
