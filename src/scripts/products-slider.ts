export function initProductsSlider(root: ParentNode = document) {
  const sliders = Array.from(
    root.querySelectorAll<HTMLElement>(".offer-category__products-slider")
  ).filter((el) => el.dataset.sliderInit !== "true");

  if (sliders.length === 0) return;

  sliders.forEach((slider) => {
    slider.dataset.sliderInit = "true";

    const track = slider.querySelector<HTMLElement>(
      ".offer-category__products-track"
    );
    const dots = Array.from(
      slider.querySelectorAll<HTMLButtonElement>(
        ".offer-category__products-dot"
      )
    );
    const prevBtn = slider.querySelector<HTMLButtonElement>(
      ".offer-category__products-arrow--prev"
    );
    const nextBtn = slider.querySelector<HTMLButtonElement>(
      ".offer-category__products-arrow--next"
    );
    const cards = Array.from(
      (track?.children ?? []) as Iterable<HTMLElement>
    );

    if (!track || cards.length === 0) return;

    const len = cards.length;
    let current = Math.min(1, len - 1);

    function wrap(idx: number): number {
      return ((idx % len) + len) % len;
    }

    function update() {
      const prev = wrap(current - 1);
      const next = wrap(current + 1);

      cards.forEach((card, i) => {
        card.classList.remove("is-active", "is-prev", "is-next");
        if (i === current) {
          card.classList.add("is-active");
        } else if (i === prev) {
          card.classList.add("is-prev");
        } else if (i === next) {
          card.classList.add("is-next");
        }
      });

      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));
    }

    function goTo(idx: number) {
      current = wrap(idx);
      update();
    }

    prevBtn?.addEventListener("click", () => goTo(current - 1));
    nextBtn?.addEventListener("click", () => goTo(current + 1));

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => goTo(i));
    });

    // Swipe support
    let startX = 0;
    let startY = 0;
    let tracking = false;

    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goTo(current + 1);
        else goTo(current - 1);
      }
    }, { passive: true });

    update();
  });
}
