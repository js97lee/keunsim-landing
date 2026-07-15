export default function PolicyList({ sections }) {
  return (
    <div className="policy-list">
      {sections.map((section) => (
        <article className="policy-row" key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </div>
  );
}
