import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    component: () =>
      import(/* webpackChunkName: "axios" */ "../views/AxiosTestView.vue"),
  },
  {
    path: "/call-event",
    name: "call event",
    component: () =>
      import(/* webpackChunkName: "callEvent" */ "../views/EventCallView.vue"),
  },
  {
    path: "/slot",
    name: "slot",
    component: () =>
      import(/* webpackChunkName: "slot" */ "../views/SlotModalLayoutView.vue"),
  },
  {
    path: "/another-slot",
    name: "slot2",
    component: () =>
      import(/* webpackChunkName: "slot2" */ "../views/FancyButtonView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
