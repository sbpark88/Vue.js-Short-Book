<template>
  <button type="button" v-show="!oAuth.access_token" @click="getToken">
    토큰 가져오기
  </button>
  <button type="button" @click="requestUserInfo">사용자 정보 가져오기</button>
  <button type="button" @click="signOut">로그아웃</button>
  <p id="token-result">Access Token: {{ oAuth.access_token }}</p>
  <p>
    Kakao Porfile :
    <img :src="kakao.profile.profile_image_url" alt="카카오 프로필 사진" />
  </p>
  <p>e-mail : {{ kakao.email }}</p>
</template>

<script>
import { onMounted, reactive } from "vue";
import { $post } from "@/utils/api";
import router from "@/router";

export default {
  name: "KakaoSignInSuccess",
  setup() {
    let authorizeCode = "";

    const oAuth = reactive({
      access_token: "",
      token_type: "",
      refresh_token: "",
      expires_in: 0,
      scope: "",
      refresh_token_expires_in: 0,
    });

    const kakao = reactive({
      profile: "",
      email: "",
    });

    onMounted(() => {
      getAuthorizeCode();
      console.log(`authorizeCode: ${authorizeCode}`);
    });

    const getAuthorizeCode = () => {
      authorizeCode = window.location.search.split("=")[1];
    };

    // redirect_uri: encodeURIComponent("http://localhost:8080/logged-in"), // Do not encode REDIRECT_URI
    const getToken = async () => {
      const token = await $post(
        "https://kauth.kakao.com/oauth/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          client_id: "", // Kakao_REST_API_KEY
          redirect_uri: "http://localhost:8080/logged-in", // REDIRECT_URI
          code: authorizeCode, // AUTHORIZE_CODE
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (token) {
        Object.assign(oAuth, token);
        window.Kakao.Auth.setAccessToken(oAuth.access_token);
      } else {
        alert("인증 실패! 처음부터 다시 시도하십시오.");
        // location.href = "/kakao";
        await router.push("/kakao");
      }
    };

    const requestUserInfo = () => {
      if (oAuth.access_token) {
        window.Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["kakao_account.profile", "kakao_account.email"],
          },
        })
          .then((res) => {
            console.log(res);
            Object.assign(kakao, res.kakao_account);
            console.log(kakao);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("토큰을 획득하세요.");
      }
    };
    const signOut = async () => {
      await window.Kakao.Auth.logout()
        .then((res) => {
          console.log(res);
          console.log(window.Kakao.Auth.getAccessToken()); // null
        })
        .catch((err) => {
          console.log(err);
          alert("Not logged in.");
        });

      alert("잠시 후 로그인 화면으로 이동합니다.");
      setTimeout(async () => {
        await router.push("/kakao");
      }, 3000);
    };

    return {
      oAuth,
      kakao,
      getToken,
      requestUserInfo,
      signOut,
    };
  },
};
</script>

<style scoped>
button {
  margin: 0 10px;
}
</style>
