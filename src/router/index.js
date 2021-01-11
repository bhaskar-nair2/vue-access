import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Actions.vue"),
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("@/views/Actions.vue"),
  },
  {
    path: "/views",
    name: "Views",
    component: () => import("@/views/Actions.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
