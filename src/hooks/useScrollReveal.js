import { useEffect } from "react";

export function useScrollReveal(dependency) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".reveal-on-scroll"));
    if (!targets.length) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 12% 0px" },
    );

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${Math.min(index * 45, 240)}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [dependency]);
}
