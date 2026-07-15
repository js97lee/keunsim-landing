import MobilePageShell from "../layout/MobilePageShell";

export default function InfoLayout({ title, description, children }) {
  return (
    <MobilePageShell mainClassName="info-page">
      <header className="info-header">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </header>
      <section className="info-content">{children}</section>
    </MobilePageShell>
  );
}
