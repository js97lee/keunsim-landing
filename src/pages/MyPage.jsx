import { Link, useNavigate, useSearchParams } from "react-router-dom";
import KakaoLoginButton from "../components/auth/KakaoLoginButton";
import MobilePageShell from "../components/layout/MobilePageShell";
import { setAuthPreview, useAuthPreview } from "../hooks/useAuthPreview";

export default function MyPage() {
  const isAuthenticated = useAuthPreview();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const togglePreview = () => {
    const nextState = !isAuthenticated;
    const returnTo = searchParams.get("returnTo");

    setAuthPreview(nextState);
    if (nextState && returnTo?.startsWith("/") && !returnTo.startsWith("//")) {
      navigate(returnTo);
    }
  };

  return (
    <MobilePageShell mainClassName="mypage" showFooter={false}>
      <section className="mypage-content">
        <h1 className="mypage-title-light">매일 카톡으로 받는</h1>
        <h1>지식 콘텐츠</h1>
        <p className="mypage-brand">데일리피스</p>
        <p className="mypage-description">
          연간 구독 한 번으로, 하루 10분씩
          <br />
          1년이면 약 61시간의 지식이 쌓여요.
        </p>
      </section>
      <section className="mypage-actions">
        <KakaoLoginButton />
        <small>
          로그인 시 <Link to="/policies/terms">이용약관</Link> 및 <Link to="/policies/privacy">개인정보처리방침</Link>에
          <br />
          동의하게 됩니다.
        </small>
        {import.meta.env.DEV ? (
          <button className="auth-preview-toggle" type="button" onClick={togglePreview}>
            {isAuthenticated ? "로그아웃 상태 미리보기" : "로그인 상태 미리보기"}
          </button>
        ) : null}
      </section>
    </MobilePageShell>
  );
}
