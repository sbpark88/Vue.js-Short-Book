import { $post } from "@/utils/api";

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
      "https://kauth.kakao.com/oauth/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "", // Kakao_REST_API_KEY
        redirect_uri: redirectUri, // REDIRECT_URI
        code: authorizationCode, // AUTHORIZE_CODE
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
      url: "/v2/user/me",
      data: data,
    });
  };
};

export {
  signIn,
  signOut,
  extractAuthorizationCode,
  getOAuthToken,
  getUserInformation,
};
