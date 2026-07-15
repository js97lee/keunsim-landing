import { useAutoSlider } from "../../hooks/useAutoSlider";

export default function HeroSlider({ banners }) {
  const [activeIndex, setActiveIndex] = useAutoSlider(banners.length);

  return (
    <section className="hero">
      <div className="hero-slider" aria-label="상단 배너">
        <div className="hero-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {banners.map((banner) => (
            <figure className="hero-slide" key={banner.src}>
              <img className="hero-banner-image" src={banner.src} alt={banner.alt} />
            </figure>
          ))}
        </div>
        <div className="hero-dots" role="tablist" aria-label="배너 선택">
          {banners.map((banner, index) => (
            <button
              key={`${banner.src}-dot`}
              type="button"
              role="tab"
              className={`hero-dot${activeIndex === index ? " active" : ""}`}
              aria-label={`${index + 1}번 배너`}
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
