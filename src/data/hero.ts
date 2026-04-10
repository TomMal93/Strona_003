export const hero = {
  tagline: "Twój doradca ubezpieczeniowy",
  title:
    'Wspólnie dobierzemy rozwiązanie dopasowane<br>do <span class="hero-shimmer">Twojej sytuacji</span>.',
  description:
    "Nie zaczynam od gotowej oferty, ale od poznania Twojej sytuacji i tego, co naprawdę ma dla Ciebie znaczenie.<br>Dopiero potem dobieramy właściwe rozwiązanie.",
  advisorCard: {
    availability: "Oddzwaniam tego samego dnia",
    role: "Jerzy PolXXXX",
    quote:
      "Najpierw porządkujemy sytuację, potem dobieramy ochronę. Bez pośpiechu i bez przypadkowych decyzji.",
    specialties: ["Ciebie", "Rodzinę", "Firmę"],
  },
  actions: {
    primary: { label: "Zadzwoń teraz" },
    secondary: { label: "O mnie", href: "#o-mnie" },
    tertiary: { label: "Zobacz ofertę", href: "#oferta" },
  },
  trustList: [
    {
      icon: "contact",
      title: "Dopasowany kontakt",
      text: "Telefon lub spotkanie na miejscu, tak jak Ci wygodnie.",
    },
    {
      icon: "person",
      title: "Jeden kontakt",
      text: "Masz stałą osobę do kontaktu w sprawie polisy.",
    },
    {
      icon: "clock",
      title: "Szybki odzew",
      text: "Oddzwaniam tego samego dnia.",
    },
  ],
} as const;
