import { createStore } from "vuex";
import OAuthServer from "@/models/enums/OAuthServer";
import kakaoOAuth from "@/store/modules/kakaoOAuth";

export default createStore({
  state: {
    currentServer: OAuthServer.NONE,
  },
  getters: {
    getCurrentServer: (state) => state.currentServer,
  },
  mutations: {
    setCurrentServer: (state, newServer) => {
      state.currentServer = Object.values(OAuthServer)?.includes(newServer)
        ? newServer
        : OAuthServer.NONE;
    },
  },
  actions: {},
  modules: { kakaoOAuth },
});
