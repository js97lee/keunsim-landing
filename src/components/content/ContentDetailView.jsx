import ContentPricing from "./ContentPricing";
import DiscountBadge from "./DiscountBadge";

export default function ContentDetailView({ content }) {
  return (
    <>
      <figure className="detail-visual">
        <img src={content.image} alt={`${content.title} 대표 이미지`} />
        <DiscountBadge value={content.discount} />
      </figure>
      <section className="detail-summary">
        <span className="detail-eyebrow">DAILY PIECE CONTENT</span>
        <h1>{content.title}</h1>
        <p>{content.detailDescription}</p>
        <ContentPricing content={content} variant="detail" />
      </section>
      <section className="detail-benefits">
        <h2>{content.detailHeading}</h2>
        <ul>
          {content.detailPoints.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.body}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="detail-recommendations">
        <h2>이런 분께 추천해요</h2>
        <ul>
          {content.recommendedFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
