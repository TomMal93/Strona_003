export function initNavbar(root: ParentNode = document) {
  const navbar = root.querySelector<HTMLElement>("#navbar");

  if (!navbar || navbar.dataset.jsInitialized === "true") {
    return;
  }

  navbar.dataset.jsInitialized = "true";

  const hamburger = navbar.querySelector<HTMLElement>("#hamburger-btn");
  const mobileMenu = navbar.querySelector<HTMLElement>("#mobile-menu");
  const backdrop = navbar.querySelector<HTMLElement>("#mobile-backdrop");
  const navAnchors = Array.from(navbar.querySelectorAll<HTMLElement>(".nav-link"));
  const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
  const SCROLL_THRESHOLD = 50;
  const SHORT_VIEWPORT_HEIGHT = 1171;
  const CENTERED_SHORT_VIEWPORT_SECTIONS = new Set([
    "oferta",
    "wspolpraca",
    "faq",
    "o-mnie",
    "dlaczego-warto",
  ]);

  const clearActiveLinks = () => {
    navAnchors.forEach((anchor) => anchor.classList.remove("nav-link-active"));
  };

  const setActiveLinks = (href: string) => {
    clearActiveLinks();
    navAnchors
      .filter((anchor) => anchor.getAttribute("href") === href)
      .forEach((anchor) => anchor.classList.add("nav-link-active"));
  };

  const scrollSectionIntoView = (section: HTMLElement) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = section.querySelector<HTMLElement>(".section-frame");
    const target = frame ?? section;
    const navbarHeight = navbar.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const availableHeight = viewportHeight - navbarHeight;
    const targetHeight = target.getBoundingClientRect().height;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    let top = targetTop - 6 * 16;

    if (
      CENTERED_SHORT_VIEWPORT_SECTIONS.has(section.id) &&
      viewportHeight < SHORT_VIEWPORT_HEIGHT
    ) {
      top = targetTop - navbarHeight - Math.max((availableHeight - targetHeight) / 2, 0);
    }

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const onScroll = () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > SCROLL_THRESHOLD);
  };

  const closeMenu = () => {
    mobileMenu?.classList.remove("mobile-menu--open");
    backdrop?.classList.remove("mobile-backdrop--visible");
    hamburger?.classList.remove("hamburger--open");
    document.body.classList.remove("body-lock-scroll");
    hamburger?.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    mobileMenu?.classList.add("mobile-menu--open");
    backdrop?.classList.add("mobile-backdrop--visible");
    hamburger?.classList.add("hamburger--open");
    document.body.classList.add("body-lock-scroll");
    hamburger?.setAttribute("aria-expanded", "true");
  };

  const updateActiveNav = () => {
    if (window.location.pathname !== "/") {
      return;
    }

    const firstSection = sections[0];
    const lastSection = sections.at(-1);

    if (!firstSection) {
      setActiveLinks("/");
      return;
    }

    if (firstSection.getBoundingClientRect().top > window.innerHeight * 0.35) {
      setActiveLinks("/");
      return;
    }

    const nearPageBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

    if (nearPageBottom && lastSection) {
      setActiveLinks(`#${lastSection.id}`);
      return;
    }

    const viewportMarker = window.innerHeight * 0.35;
    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= viewportMarker) {
        activeSection = section;
      }
    });

    setActiveLinks(`#${activeSection.id}`);
  };

  hamburger?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("mobile-menu--open");
    isOpen ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener("click", closeMenu);

  mobileMenu?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  navAnchors
    .filter((anchor) => anchor.getAttribute("href")?.startsWith("#"))
    .forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");

        if (!href) {
          return;
        }

        const targetSection = document.querySelector<HTMLElement>(href);

        if (!targetSection) {
          return;
        }

        event.preventDefault();
        closeMenu();
        scrollSectionIntoView(targetSection);
        window.history.replaceState(null, "", href);
      });
    });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);

  onScroll();
  updateActiveNav();
}

if (typeof document !== "undefined") {
  initNavbar();
}
