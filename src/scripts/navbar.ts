import { sectionTocLinks } from "../data/navigation";

const SCROLL_THRESHOLD = 50;
const SHORT_VIEWPORT_HEIGHT = 1171;
const CENTERED_SHORT_VIEWPORT_SECTIONS = new Set([
  "oferta",
  "wspolpraca",
  "faq",
  "o-mnie",
  "dlaczego-warto",
]);

type ActiveSectionListener = (sectionId: string | null) => void;

let activeSectionListeners = new Set<ActiveSectionListener>();
let activeSectionTrackerInitialized = false;
let currentActiveSectionId: string | null = null;

function getNavbar(): HTMLElement | null {
  return document.querySelector<HTMLElement>("#navbar");
}

function getTrackedSections() {
  return sectionTocLinks
    .map((link) => {
      const sectionId = link.href.replace("#", "");
      return document.getElementById(sectionId);
    })
    .filter((section): section is HTMLElement => Boolean(section));
}

function getActiveSectionId(sections: HTMLElement[]) {
  const firstSection = sections[0];
  const lastSection = sections.at(-1);
  const viewportMarker = window.innerHeight * 0.45;

  if (!firstSection) {
    return null;
  }

  if (firstSection.getBoundingClientRect().top > viewportMarker) {
    return null;
  }

  const nearPageBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

  if (nearPageBottom && lastSection) {
    return lastSection.id;
  }

  const intersectingSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= viewportMarker && rect.bottom >= viewportMarker;
  });

  if (intersectingSection) {
    return intersectingSection.id;
  }

  let closestSection = sections[0];
  let closestDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section) => {
    const distance = Math.abs(section.getBoundingClientRect().top - viewportMarker);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section;
    }
  });

  return closestSection.id;
}

function notifyActiveSectionListeners() {
  const nextSectionId =
    window.location.pathname === "/" ? getActiveSectionId(getTrackedSections()) : null;

  if (nextSectionId === currentActiveSectionId) {
    return;
  }

  currentActiveSectionId = nextSectionId;
  activeSectionListeners.forEach((listener) => listener(currentActiveSectionId));
}

function ensureActiveSectionTracker() {
  if (activeSectionTrackerInitialized) {
    return;
  }

  activeSectionTrackerInitialized = true;
  window.addEventListener("scroll", notifyActiveSectionListeners, { passive: true });
  window.addEventListener("resize", notifyActiveSectionListeners);
  notifyActiveSectionListeners();
}

function subscribeToActiveSection(listener: ActiveSectionListener) {
  ensureActiveSectionTracker();
  activeSectionListeners.add(listener);
  listener(currentActiveSectionId);

  return () => {
    activeSectionListeners.delete(listener);
  };
}

function setActiveLinks(anchors: HTMLElement[], href: string | null) {
  anchors.forEach((anchor) => {
    anchor.classList.toggle(
      "nav-link-active",
      Boolean(href) && anchor.getAttribute("href") === href,
    );
  });
}

function scrollSectionIntoView(section: HTMLElement) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frame = section.querySelector<HTMLElement>(".section-frame");
  const target = frame ?? section;
  const navbarHeight = getNavbar()?.getBoundingClientRect().height ?? 0;
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
}

function bindSectionAnchorBehavior(
  anchors: HTMLAnchorElement[],
  onBeforeScroll?: () => void,
) {
  anchors
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
        onBeforeScroll?.();
        scrollSectionIntoView(targetSection);
        window.history.replaceState(null, "", href);
      });
    });
}

export function initNavbar(root: ParentNode = document) {
  const navbar = root.querySelector<HTMLElement>("#navbar");

  if (!navbar || navbar.dataset.jsInitialized === "true") {
    return;
  }

  navbar.dataset.jsInitialized = "true";

  const hamburger = navbar.querySelector<HTMLElement>("#hamburger-btn");
  const mobileMenu = navbar.querySelector<HTMLElement>("#mobile-menu");
  const backdrop = navbar.querySelector<HTMLElement>("#mobile-backdrop");
  const navAnchors = Array.from(navbar.querySelectorAll<HTMLAnchorElement>(".nav-link"));

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

  hamburger?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("mobile-menu--open");
    isOpen ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener("click", closeMenu);

  mobileMenu?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  bindSectionAnchorBehavior(navAnchors, closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  const onScroll = () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > SCROLL_THRESHOLD);
  };

  subscribeToActiveSection((activeSectionId) => {
    if (window.location.pathname !== "/") {
      setActiveLinks(navAnchors, window.location.pathname);
      return;
    }

    setActiveLinks(navAnchors, activeSectionId ? `#${activeSectionId}` : null);
  });

  window.addEventListener("scroll", onScroll, { passive: true });

  onScroll();
}

export function initSectionToc(root: ParentNode = document) {
  const toc = root.querySelector<HTMLElement>("#section-toc");

  if (!toc || toc.dataset.jsInitialized === "true") {
    return;
  }

  toc.dataset.jsInitialized = "true";

  const tocAnchors = Array.from(toc.querySelectorAll<HTMLAnchorElement>(".section-toc__link"));
  const revealStart = 80;
  const revealEnd = 280;

  const updateTocVisibility = () => {
    if (window.location.pathname !== "/") {
      toc.style.setProperty("--section-toc-progress", "0");
      toc.classList.remove("section-toc--interactive");
      return;
    }

    const progress = Math.min(
      Math.max((window.scrollY - revealStart) / (revealEnd - revealStart), 0),
      1,
    );

    toc.style.setProperty("--section-toc-progress", progress.toFixed(3));
    toc.classList.toggle("section-toc--interactive", progress > 0.96);
  };

  bindSectionAnchorBehavior(tocAnchors);

  subscribeToActiveSection((activeSectionId) => {
    tocAnchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");

      anchor.classList.toggle(
        "section-toc__link--active",
        Boolean(activeSectionId && href === `#${activeSectionId}`),
      );
    });
  });

  window.addEventListener("scroll", updateTocVisibility, { passive: true });
  window.addEventListener("resize", updateTocVisibility);
  updateTocVisibility();
}

if (typeof document !== "undefined") {
  initNavbar();
}
