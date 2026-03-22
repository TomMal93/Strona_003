export const hero = {
  tagline: "Twój agent ubezpieczeniowy",
  title:
    'Ubezpieczenia <span class="text-(--color-accent)">dopasowane</span> do Twojej sytuacji',
  description:
    "Pomagam dobrać ochronę, która ma sens — dla Ciebie, Twojej rodziny i Twojego majątku. Bez zbędnych polis, bez przepłacania.",
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
