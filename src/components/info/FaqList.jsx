export default function FaqList({ faqs }) {
  return faqs.map((faq, index) => (
    <article className="faq-row" key={faq.question}>
      <span className="faq-number">Q{index + 1}.</span>
      <div>
        <h2>{faq.question}</h2>
        <p>{faq.answer}</p>
      </div>
    </article>
  ));
}
