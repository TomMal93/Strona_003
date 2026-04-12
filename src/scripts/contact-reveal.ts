export function initContactReveal(root: ParentNode = document) {
  const cards = Array.from(root.querySelectorAll<HTMLElement>(".contact-channel"))
    .filter((card) => card.dataset.revealInitialized !== "true");

  if (cards.length === 0) {
    return;
  }

  cards.forEach((card) => {
    card.dataset.revealInitialized = "true";
  });

  if (
    typeof window === "undefined" ||
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const card = entry.target as HTMLElement;
        const delay = Number.parseInt(card.dataset.delay || "0", 10);

        window.setTimeout(() => card.classList.add("is-visible"), delay);
        observer.unobserve(card);
      });
    },
    { threshold: 0.15 },
  );

  cards.forEach((card) => observer.observe(card));
}

if (typeof document !== "undefined") {
  initContactReveal();
}
