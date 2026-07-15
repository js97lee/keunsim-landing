import SectionHeader from "./SectionHeader";

const iconPaths = {
  book: (
    <>
      <path d="M5 5h9a4 4 0 0 1 4 4v10H9a4 4 0 0 0-4 0V5Z" />
      <path d="M8 9h6" />
      <path d="M8 13h5" />
    </>
  ),
  chat: (
    <>
      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v5A2.5 2.5 0 0 1 16.5 15H11l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 12.5v-5Z" />
      <path d="M9 9.8h6" />
      <path d="M9 12h4" />
    </>
  ),
  clock: (
    <>
      <path d="M12 4a8 8 0 1 0 8 8" />
      <path d="M12 8v5l4 2" />
    </>
  ),
  send: (
    <>
      <path d="M4 12 20 5l-4.5 14-3.2-5.1L4 12Z" />
      <path d="M12.3 13.9 20 5" />
    </>
  ),
};

function FlowIcon({ name }) {
  return (
    <span className="flow-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{iconPaths[name]}</svg>
    </span>
  );
}

export default function FlowSection({ steps }) {
  return (
    <section className="flow-section" id="how">
      <SectionHeader title="이용방법" description="고르고, 가입하고, 매일 카톡으로 받기" />
      <ol className="flow-list">
        {steps.map((step, index) => (
          <li key={step.title} className="reveal-on-scroll">
            <span className="flow-top">
              <FlowIcon name={step.icon} />
              <span className="flow-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
            <b>{step.title}</b>
            <span>{step.description}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
