<template>
  <p id="token-result">{{ tokenResult }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  displayToken();
});

let tokenResult = ref("");
function displayToken() {
  console.log("displayToken called.");
  let token = getCookie("authorize-access-token");
  console.log(token);

  if (token) {
    window.Kakao.Auth.setAccessToken(token);
    window.Kakao.Auth.getStatusInfo()
      .then((res) => {
        if (res.status === "connected") {
          tokenResult = `login success, token: ${window.Kakao.Auth.getAccessToken()}`;
        }
      })
      .catch((err) => {
        console.error(err);
        window.Kakao.Auth.setAccessToken(null);
      });
  }
}

function getCookie(name) {
  let parts = document.cookie.split(name + "=");
  if (parts.length === 2) {
    return parts[1].split(";")[0];
  }
}
</script>

<style scoped></style>
