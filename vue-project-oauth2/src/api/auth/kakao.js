import { $post } from "@/utils/api";

const JAVASCRIPT_KEY = "";
const REST_API_KEY = "";
const URL = Object.freeze({
  TOKEN: "https://kauth.kakao.com/oauth/token",
  USER_INFO: "/v2/user/me",
});

const signIn = (redirectUri) => {
  return () => {
    window.Kakao.Auth.authorize({
      redirectUri: redirectUri,
      scope: "profile_image, account_email",
    });
  };
};

const signOut = () => {
  return window.Kakao.Auth.logout()
    .then((res) => {
      console.log(res);
      console.log(window.Kakao.Auth.getAccessToken()); // null
    })
    .catch((err) => {
      console.log(err);
      alert("Not logged in.");
    });
};

const extractAuthorizationCode = () => window.location.search.split("=")[1];

const getOAuthToken = (redirectUri, authorizationCode) => {
  return async () => {
    // redirect_uri: encodeURIComponent("http://localhost:8080/logged-in"), // Do not encode REDIRECT_URI
    return $post(
      URL.TOKEN,
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: REST_API_KEY, // Kakao_REST_API_KEY
        redirect_uri: redirectUri, // REDIRECT_URI
        code: authorizationCode, // AUTHORIZE_CODE
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
  };
};

const updateOAuthToken = () => {
  return async (refreshToken) => {
    return $post(
      URL.TOKEN,
      new URLSearchParams({
        grant_type: "refresh_token",
        client_id: REST_API_KEY,
        refresh_token: refreshToken,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
  };
};

const getUserInformation = (...properties) => {
  let data = {};
  if (properties.length > 0) {
    data.property_keys = [...properties];
  }
  return () => {
    return window.Kakao.API.request({
      url: URL.USER_INFO,
      data: data,
    });
  };
};

export {
  JAVASCRIPT_KEY,
  signIn,
  signOut,
  extractAuthorizationCode,
  getOAuthToken,
  updateOAuthToken,
  getUserInformation,
};
