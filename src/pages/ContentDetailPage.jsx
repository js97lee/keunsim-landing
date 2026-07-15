import { Navigate, useParams } from "react-router-dom";
import ContentDetailView from "../components/content/ContentDetailView";
import SubscribeFloatingBar from "../components/content/SubscribeFloatingBar";
import MobilePageShell from "../components/layout/MobilePageShell";
import { getContentBySlug } from "../data/content";

export default function ContentDetailPage() {
  const { slug } = useParams();
  const content = getContentBySlug(slug);

  if (!content) return <Navigate to="/" replace />;

  return (
    <MobilePageShell
      shellClassName="detail-shell"
      mainClassName="content-detail"
      overlay={<SubscribeFloatingBar content={content} />}
    >
      <ContentDetailView content={content} />
    </MobilePageShell>
  );
}
