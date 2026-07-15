export function startKakaoLogin() {
  const restApiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI || `${window.location.origin}/mypage`;

  if (!restApiKey) {
    window.alert("카카오 REST API 키가 설정되지 않았습니다. .env.local을 확인해 주세요.");
    return;
  }

  const state = window.crypto.randomUUID();
  window.sessionStorage.setItem("kakao_oauth_state", state);

  const params = new URLSearchParams({
    client_id: restApiKey,
    redirect_uri: redirectUri,
    response_type: "code",
    state,
  });

  window.location.assign(`https://kauth.kakao.com/oauth/authorize?${params.toString()}`);
}
