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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/kakao",
    name: "kakaoOAuth",
    component: () =>
      import(/* webpackChunkName: "kakaoOAuth2" */ "../views/KakaoOAuth2.vue"),
  },
  {
    path: "/logged-in",
    name: "kakao-login-success",
    component: () =>
      import(
        /* webpackChunkName: "kakaoSuccess"*/ "../views/KakaoSignInSuccess.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
