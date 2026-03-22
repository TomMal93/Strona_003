export const hero = {
  tagline: "Twój agent ubezpieczeniowy",
  title:
    'Twoje <span class="text-(--color-accent)">bezpieczeństwo</span><br>w dobrych rękach',
  description:
    "Rekomenduję tylko rozwiązania, które sam wybrałbym dla swojej rodziny. Jasne warunki, brak ukrytych kosztów.",
  actions: {
    primary: { label: "Umów konsultację", href: "#kontakt" },
    secondary: { label: "Zobacz ofertę", href: "#oferta" },
  },
  trustBadges: [
    { label: "15+ lat doświadczenia" },
    { label: "1000+ zadowolonych klientów" },
    { label: "Bezpłatna konsultacja" },
  ],
} as const;
