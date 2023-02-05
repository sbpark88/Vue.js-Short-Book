import OAuthServer from "@/models/enums/OAuthServer";

const state = {
  oAuthServer: OAuthServer.KAKAO,
  oAuth: {
    access_token: "",
    token_type: "",
    refresh_token: "",
    expires_in: 0,
    scope: "",
    refresh_token_expires_in: 0,
  },
};
const getters = {
  getAccessToken: (state) => state.oAuth.access_token,
  getTokenType: (state) => state.oAuth.token_type,
  getRefreshToken: (state) => state.oAuth.refresh_token,
  getExpiresIn: (state) => state.oAuth.expires_in,
  getScope: (state) => state.oAuth.scope,
  getRefreshTokenExpiresIn: (state) => state.oAuth.refresh_token_expires_in,
};
const mutations = {
  setAccessToken: (state, newToken) => (state.oAuth.access_token = newToken),
  setToken: (state, oAuth) => {
    (state.oAuth.access_token = oAuth.access_token),
      (state.oAuth.token_type = oAuth.token_type),
      (state.oAuth.refresh_token = oAuth.refresh_token),
      (state.oAuth.expires_in = oAuth.expires_in),
      (state.oAuth.scope = oAuth.scope),
      (state.oAuth.refresh_token_expires_in = oAuth.refresh_token_expires_in);
  },
  resetToken: (state) => {
    (state.oAuth.access_token = ""),
      (state.oAuth.token_type = ""),
      (state.oAuth.refresh_token = ""),
      (state.oAuth.expires_in = 0),
      (state.oAuth.scope = ""),
      (state.oAuth.refresh_token_expires_in = "");
  },
};
const actions = {};
const modules = {};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: modules,
};
