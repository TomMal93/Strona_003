export function initOfferReveal(root: ParentNode = document) {
  const sections = Array.from(
    root.querySelectorAll<HTMLElement>(".offer-category"),
  ).filter((el) => el.dataset.revealInitialized !== "true");

  if (sections.length === 0) {
    return;
  }

  sections.forEach((el) => {
    el.dataset.revealInitialized = "true";
  });

  if (
    typeof window === "undefined" ||
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const el = entry.target as HTMLElement;
        const delay = Number.parseInt(el.dataset.delay || "0", 10);

        window.setTimeout(() => el.classList.add("is-visible"), delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach((el) => observer.observe(el));
}

if (typeof document !== "undefined") {
  initOfferReveal();
}
