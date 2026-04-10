export const heroTrustIcons = {
  contact: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.75 7.25L12 13l9.25-5.75" />
  `,
  person: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 20a7 7 0 0 1 14 0" />
  `,
  clock: `
    <circle cx="12" cy="12" r="8.25" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.75v4.75l3 1.75" />
  `,
  support: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 1115 0v2.1a1.9 1.9 0 01-1.9 1.9H16v-4.6h1.6V12a5.6 5.6 0 10-11.2 0v4H4.5A1.9 1.9 0 012.6 14.1V12" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M16 18.2c0 1.55-1.45 2.8-3.25 2.8H12" />
  `,
  check: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
  `,
} as const;

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
      title: "Stały doradca",
      text: "Masz stałą osobę do kontaktu w sprawie polisy.",
    },
    {
      icon: "clock",
      title: "Szybki odzew",
      text: "Oddzwaniam tego samego dnia.",
    },
  ],
} as const;
