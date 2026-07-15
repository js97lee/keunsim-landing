export default function SectionHeader({ title, description }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
