import OAuthServer from "@/models/enums/OAuthServer";

const state = {
  oAuthServer: OAuthServer.KAKAO,
  oAuth: {
    token_type: "",
    scope: "",
    access_token: "",
    expires_in: 0,
    refresh_token: "",
    refresh_token_expires_in: 0,
  },
};
const getters = {
  getTokenType: (state) => state.oAuth.token_type,
  getScope: (state) => state.oAuth.scope,
  getAccessToken: (state) => state.oAuth.access_token,
  getExpiresIn: (state) => state.oAuth.expires_in,
  getRefreshToken: (state) => state.oAuth.refresh_token,
  getRefreshTokenExpiresIn: (state) => state.oAuth.refresh_token_expires_in,
};
const mutations = {
  setAccessToken: (state, newToken) => (state.oAuth.access_token = newToken),
  setToken: (state, oAuth) => {
    if (oAuth.token_type) state.oAuth.token_type = oAuth.token_type;
    if (oAuth.scope) state.oAuth.scope = oAuth.scope;
    if (oAuth.access_token) state.oAuth.access_token = oAuth.access_token;
    if (oAuth.expires_in) state.oAuth.expires_in = oAuth.expires_in;
    if (oAuth.refresh_token) state.oAuth.refresh_token = oAuth.refresh_token;
    if (oAuth.refresh_token_expires_in)
      state.oAuth.refresh_token_expires_in = oAuth.refresh_token_expires_in;
  },
  resetToken: (state) => {
    (state.oAuth.token_type = ""),
      (state.oAuth.scope = ""),
      (state.oAuth.access_token = ""),
      (state.oAuth.expires_in = 0),
      (state.oAuth.refresh_token = ""),
      (state.oAuth.refresh_token_expires_in = 0);
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
