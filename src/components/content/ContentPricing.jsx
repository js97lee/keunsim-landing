export default function ContentPricing({ content, variant = "compact" }) {
  if (variant === "detail") {
    return (
      <div className="content-pricing--detail">
        <div>
          <span>총 금액</span>
          <strong>연 {content.totalPrice}</strong>
        </div>
        <div>
          <span>월 금액</span>
          <strong>{content.monthlyPrice.replace("월 ", "")}</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="content-pricing--compact">
      <span>총 금액</span>
      <strong>연 {content.totalPrice}</strong>
      <small>{content.monthlyPrice}</small>
    </div>
  );
}
