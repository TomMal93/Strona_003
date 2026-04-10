export const hero = {
  tagline: "Twój doradca ubezpieczeniowy",
  title:
    'Wspólnie dobierzemy rozwiązanie dopasowane<br>do <span class="hero-shimmer">Twojej sytuacji</span>.',
  description:
    "Nie zaczynam od gotowej oferty, ale od poznania Twojej sytuacji i tego, co naprawdę ma dla Ciebie znaczenie.<br>Dopiero potem dobieramy właściwe rozwiązanie.",
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
    { icon: "shield", title: "Bez presji", text: "Jasne warunki, spokojne wyjaśnienie" },
    { icon: "map", title: "Lokalnie", text: "Krasnystaw, Zamość, Chełm, Lublin" },
    { icon: "support", title: "Wsparcie", text: "Wznowienia, zmiany, dopasowanie" },
  ],
} as const;
