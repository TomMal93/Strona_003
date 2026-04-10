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
  trustList: [
    { icon: "shield", text: "Bez presji — jasne warunki, spokojne wyjaśnienie" },
    { icon: "map", text: "Lokalnie lub online — Krasnystaw, Zamość, Chełm, Lublin" },
    { icon: "support", text: "Pomoc także później — wznowienia, zmiany, dopasowanie" },
    { icon: "check", text: "Bezpłatna konsultacja, bez ukrytych kosztów" },
  ],
} as const;
