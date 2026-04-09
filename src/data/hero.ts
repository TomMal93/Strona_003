export const hero = {
  tagline: "Twój agent ubezpieczeniowy",
  title:
    'Twoje <span class="hero-shimmer">bezpieczeństwo</span><br>w dobrych rękach',
  description:
    "Rekomenduję tylko rozwiązania, które sam wybrałbym dla swojej rodziny.<br>Jasne warunki, brak ukrytych kosztów.",
  advisorCard: {
    availability: "Oddzwaniam tego samego dnia",
    role: "Ochrona dopasowana do Ciebie • Jerzy PolXXXX",
    quote:
      "Najpierw porządkujemy sytuację, potem dobieramy ochronę. Bez pośpiechu i bez przypadkowych decyzji.",
    specialties: ["Dla Ciebie", "Dla rodziny", "Dla firmy"],
  },
  actions: {
    primary: { label: "Zadzwoń teraz" },
    secondary: { label: "O mnie", href: "#o-mnie" },
    tertiary: { label: "Zobacz ofertę", href: "#oferta" },
  },
  proofBar: [
    {
      icon: "shield",
      label: "Sprawdzona ochrona",
      value: "Spokojnie, konkretnie, bez presji",
      note: "Jasne warunki, spokojne wyjaśnienie zakresu i rekomendacje dopasowane do Twojej sytuacji.",
      featured: true,
    },
    {
      icon: "map",
      label: "Lokalnie lub zdalnie",
      value: "Krasnystaw, Zamość, Chełm, Lublin",
      note: "Możemy spotkać się na miejscu, porozmawiać telefonicznie albo przejść cały proces online.",
    },
    {
      icon: "support",
      label: "Pomoc także później",
      value: "Wznowienia, zmiany i dopasowanie polisy",
      note: "Wsparcie nie kończy się na wyborze oferty. Pomagam też wtedy, gdy Twoja sytuacja się zmienia.",
    },
  ],
  highlights: [
    "Indywidualne podejście",
    "Bezpłatna konsultacja",
    "Bez ukrytych kosztów",
  ],
} as const;
