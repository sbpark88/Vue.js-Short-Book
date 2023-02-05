<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin">
      <img
        src="../assets/kakao_login_medium_narrow.png"
        width="222"
        alt="카카오 로그인 버튼"
      />
    </a>
    <p id="token-result"></p>
  </div>
</template>

<script>
import { signIn } from "@/api/auth/kakao";

export default {
  name: "KakaoOAuth2",
  setup() {
    const kakaoLogin = signIn("http://localhost:8080/logged-in");

    return { kakaoLogin };
  },
};
</script>

<style scoped></style>
