export const hero = {
  tagline: "Twój doradca ubezpieczeniowy",
  title:
    'Wspólnie dobierzemy rozwiązanie dopasowane<br>do Twojej <span class="hero-shimmer">sytuacji</span>.',
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
    { icon: "shield", text: "Bez presji — jasne warunki, spokojne wyjaśnienie" },
    { icon: "map", text: "Lokalnie lub online — Krasnystaw, Zamość, Chełm, Lublin" },
    { icon: "support", text: "Pomoc także później — wznowienia, zmiany, dopasowanie" },
    { icon: "check", text: "Bezpłatna konsultacja, bez ukrytych kosztów" },
  ],
} as const;
