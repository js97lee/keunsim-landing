import { Link } from "react-router-dom";
import { useAuthPreview } from "../../hooks/useAuthPreview";

export default function SubscribeFloatingBar({ content }) {
  const isAuthenticated = useAuthPreview();
  const purchasePath = `/contents/${content.slug}/purchase`;
  const destination = isAuthenticated ? purchasePath : `/mypage?returnTo=${encodeURIComponent(purchasePath)}`;

  return (
    <div className="subscribe-floating">
      <Link to={destination}>구독하기</Link>
    </div>
  );
}
