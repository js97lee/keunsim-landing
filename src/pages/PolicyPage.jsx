import InfoLayout from "../components/info/InfoLayout";
import PolicyList from "../components/info/PolicyList";
import { privacySections, termsSections } from "../data/info";

function PolicyPage({ title, sections }) {
  return (
    <InfoLayout title={title}>
      <PolicyList sections={sections} />
    </InfoLayout>
  );
}

export function TermsPage() {
  return <PolicyPage title="이용약관" sections={termsSections} />;
}

export function PrivacyPage() {
  return <PolicyPage title="개인정보처리방침" sections={privacySections} />;
}
