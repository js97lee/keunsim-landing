import FaqList from "../components/info/FaqList";
import InfoLayout from "../components/info/InfoLayout";
import { faqs } from "../data/info";

export default function FaqPage() {
  return (
    <InfoLayout title="FAQ" description="자주 묻는 질문을 모아두었습니다.">
      <FaqList faqs={faqs} />
    </InfoLayout>
  );
}
