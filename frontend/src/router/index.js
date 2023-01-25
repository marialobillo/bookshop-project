import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/AuthorComponent",
      name: "AuthorComponent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/AuthorComponent.vue"),
    },
    {
      path: "/PublishersComponent",
      name: "PublishersComponent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/PublishersComponent.vue"),
    },
    {
      path: "/ContactComponent",
      name: "ContactComponent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/ContactComponent.vue"),
    },
    {
      path: "/CartComponent",
      name: "CartComponent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/CartComponent.vue"),
    },
    {
      path: "/RegisterComponent",
      name: "RegisterComponent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/RegisterComponent.vue"),
    },
    {
      path: "/LoginComponent",
      name: "LoginComponent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/LoginComponent.vue"),
    },
    {
      path: "/ContentManagement",
      name: "ContentManagement",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/ContentManagement.vue"),
    },
  ],
});

export default router;
