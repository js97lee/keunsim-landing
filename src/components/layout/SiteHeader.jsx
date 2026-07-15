import { Link } from "react-router-dom";
import { useAuthPreview } from "../../hooks/useAuthPreview";
import { useDrawer } from "../../hooks/useDrawer";
import { BrandLink } from "../brand/Brand";
import SiteDrawer from "./SiteDrawer";

function MyPageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9h11v4.5a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 4 13.5V9Z" />
      <path d="M15 10h2.3a2.2 2.2 0 0 1 0 4.4H15" />
      <path d="M6 20h10" />
      <path d="M9 7.2c0-1 .7-1.4.7-2.3" />
      <path d="M12 7.2c0-1 .7-1.4.7-2.3" />
    </svg>
  );
}

export default function SiteHeader() {
  const drawer = useDrawer();
  const isAuthenticated = useAuthPreview();

  return (
    <>
      <header className="app-header">
        <BrandLink />
        <nav className="header-actions" aria-label="상단 메뉴">
          <Link className="mypage-icon" to="/mypage" aria-label="마이페이지">
            <MyPageIcon />
          </Link>
          <button className="menu" type="button" aria-label="메뉴 열기" aria-controls="site-menu" aria-expanded={drawer.isOpen} onClick={drawer.open}>
            <span />
            <span />
          </button>
        </nav>
      </header>
      <SiteDrawer isOpen={drawer.isOpen} isAuthenticated={isAuthenticated} onClose={drawer.close} />
    </>
  );
}
