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
} as const;

export const hero = {
  tagline: "Twój doradca ubezpieczeniowy",
  title:
    'Wspólnie dobierzemy rozwiązania&nbsp;dopasowane<br>do <span class="hero-shimmer">Twojej sytuacji</span>',
  description:
    "Rozmawiamy konkretnie o tym, co ważne dla Ciebie, rodziny albo firmy.<br>Na tej podstawie dobieramy ochronę, która ma realny sens.",
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
