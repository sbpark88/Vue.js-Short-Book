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
export default {
  name: "KakaoOAuth2",
  setup() {
    const kakaoLogin = () => {
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080/logged-in",
        scope: "profile_image, account_email",
      });
    };

    return { kakaoLogin };
  },
};
</script>

<style scoped></style>
