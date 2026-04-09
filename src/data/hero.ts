export const hero = {
  tagline: "Twój agent ubezpieczeniowy",
  title:
    'Twoje <span class="hero-shimmer">bezpieczeństwo</span><br>w dobrych rękach',
  description:
    "Rekomenduję tylko rozwiązania, które sam wybrałbym dla swojej rodziny.<br>Jasne warunki, brak ukrytych kosztów.",
  advisorCard: {
    availability: "Oddzwaniam tego samego dnia",
    role: "Jerzy PolXXXX • Ubezpieczenia bez stresu",
    quote:
      "Najpierw porządkujemy sytuację, potem dobieramy ochronę. Bez pośpiechu i bez przypadkowych decyzji.",
    specialties: ["Dla Ciebie", "Dla rodziny", "Dla firmy"],
  },
  actions: {
    primary: { label: "Zadzwoń teraz" },
    secondary: { label: "O mnie", href: "#o-mnie" },
    tertiary: { label: "Zobacz ofertę", href: "#oferta" },
  },
  highlights: [
    "Indywidualne podejście",
    "Bezpłatna konsultacja",
    "Bez ukrytych kosztów",
  ],
} as const;
