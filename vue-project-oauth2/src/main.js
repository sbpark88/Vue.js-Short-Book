import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import { JAVASCRIPT_KEY } from "@/api/auth/kakao";

const Vue = createApp(App).use(store).use(router).use(VueCookies).mount("#app");

Vue.$cookies.config("1d");
window.Kakao.init(JAVASCRIPT_KEY); // Kakao_JavaScript_KEY
