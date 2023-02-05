<template>
  <button type="button" v-show="!oAuth.access_token" @click="getToken">
    토큰 가져오기
  </button>
  <button type="button" @click="requestUserInfo">사용자 정보 가져오기</button>
  <button type="button" @click="refreshAccessToken">Access Token 갱신</button>
  <button type="button" @click="kakaoLogout">로그아웃</button>
  <p id="token-result">Access Token: {{ oAuth.access_token }}</p>
  <p>
    Kakao Porfile :
    <img :src="kakao.profile.profile_image_url" alt="카카오 프로필 사진" />
  </p>
  <p>e-mail : {{ kakao.email }}</p>
</template>

<script>
import { onMounted, reactive, computed, toRefs } from "vue";
import router from "@/router";
import { useStore } from "vuex";
import {
  extractAuthorizationCode,
  getOAuthToken,
  getUserInformation,
  updateOAuthToken,
  signOut,
} from "@/api/auth/kakao";
import OAuthServer from "@/models/enums/OAuthServer";

const init = () => {
  const state = reactive({
    kakao: {
      profile: "",
      email: "",
    },
  });
  return toRefs(state);
};
export default {
  name: "KakaoSignInSuccess",
  setup() {
    let authorizationCode = "";
    const { kakao } = init();

    const store = useStore();
    const currentServer = computed(() => store.getters["getCurrentServer"]);
    const oAuth = computed(() => store.state.kakaoOAuth.oAuth);

    onMounted(() => {
      getAuthorizationCode();
      console.log(`authorizationCode: ${authorizationCode}`);
      console.log(store.state.currentServer);
    });

    const getAuthorizationCode = () => {
      authorizationCode = extractAuthorizationCode();
      if (authorizationCode) {
        store.commit("setCurrentServer", OAuthServer.KAKAO);
      }
    };

    const getToken = async () => {
      const token = await getOAuthToken(
        "http://localhost:8080/logged-in",
        authorizationCode
      )();

      if (currentServer.value === OAuthServer.KAKAO && token) {
        store.commit("setToken", token);
        window.Kakao.Auth.setAccessToken(oAuth.value.access_token);
      } else {
        alert("인증 실패! 처음부터 다시 시도하십시오.");
        // location.href = "/kakao";
        await router.push("/kakao");
      }
    };

    const refreshAccessToken = async () => {
      console.log(store.getters["getRefreshToken"]);
      const token = await updateOAuthToken()(store.getters["getRefreshToken"]);
      if (currentServer.value === OAuthServer.KAKAO && token) {
        const accessTokenChanged =
          !!token.access_token &&
          oAuth.value.access_token !== token.access_token;
        const refreshTokenChanged =
          !!token.refresh_token &&
          oAuth.value.refresh_token !== token.refresh_token;
        console.log(
          `Access Token 이 ${
            accessTokenChanged ? "갱신되었습니다." : "갱신되지 않았습니다."
          }  Refresh Token 이 ${
            refreshTokenChanged ? "갱신되었습니다." : "갱신되지 않았습니다."
          }
          `
        );
        store.commit("setToken", token);
        window.Kakao.Auth.setAccessToken(oAuth.value.access_token);
      } else {
        alert("인증 실패! 처음부터 다시 시도하십시오.");
        await router.push("/kakao");
      }
    };

    const requestUserInfo = () => {
      if (
        currentServer.value === OAuthServer.KAKAO &&
        oAuth.value.access_token
      ) {
        getUserInformation()()
          .then((res) => {
            console.log(res);
            Object.assign(kakao.value, res.kakao_account);
            console.log(kakao.value);
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
      store.commit("resetToken");

      alert("잠시 후 로그인 화면으로 이동합니다.");
      setTimeout(async () => {
        await router.push("/kakao");
      }, 3000);
    };

    return {
      oAuth,
      kakao,
      getToken,
      refreshAccessToken,
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
