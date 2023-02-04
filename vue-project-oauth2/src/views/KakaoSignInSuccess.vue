<template>
  <button type="button" v-show="!oAuth.access_token" @click="getToken">
    토큰 가져오기
  </button>
  <button type="button" @click="requestUserInfo">사용자 정보 가져오기</button>
  <button type="button" @click="kakaoLogout">로그아웃</button>
  <p id="token-result">Access Token: {{ oAuth.access_token }}</p>
  <p>
    Kakao Porfile :
    <img :src="kakao.profile.profile_image_url" alt="카카오 프로필 사진" />
  </p>
  <p>e-mail : {{ kakao.email }}</p>
</template>

<script>
import { onMounted, reactive } from "vue";
import router from "@/router";
import {
  extractAuthorizationCode,
  getOAuthToken,
  getUserInformation,
  signOut,
} from "@/utils/KakaoOAuth";

export default {
  name: "KakaoSignInSuccess",
  setup() {
    let authorizationCode = "";

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
      getAuthorizationCode();
      console.log(`authorizationCode: ${authorizationCode}`);
    });

    const getAuthorizationCode = () => {
      authorizationCode = extractAuthorizationCode();
    };

    const getToken = async () => {
      const token = await getOAuthToken(
        "http://localhost:8080/logged-in",
        authorizationCode
      )();

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
        getUserInformation()()
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
    const kakaoLogout = async () => {
      await signOut();

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
      kakaoLogout,
    };
  },
};
</script>

<style scoped>
button {
  margin: 0 10px;
}
</style>
