import CourseCard from "../content/CourseCard";
import SectionHeader from "./SectionHeader";

export default function ContentCatalog({ sections }) {
  return (
    <div id="content-catalog">
      {sections.map((section) => (
        <section className="content-section" id={section.id} key={section.id}>
          <SectionHeader title={section.title} description={section.subtitle} />
          <div className="content-stack">
            {section.cards.map((content) => (
              <CourseCard content={content} key={content.slug} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
