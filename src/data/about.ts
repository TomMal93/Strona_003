export const aboutTrustIcons = {
  shield: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.25 5 6v6.2c0 3.9 2.7 7.4 7 8.55 4.3-1.15 7-4.65 7-8.55V6l-7-2.75z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.25 12.25 11 14l3.75-4" />
  `,
  mapPin: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 12 3.5 6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  `,
  refresh: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 1 13-5.1" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.5 3.5v3.5H14" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12a7.5 7.5 0 0 1-13 5.1" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.5 20.5V17H10" />
  `,
  user: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 20a7 7 0 0 1 14 0" />
  `,
} as const;

export type AboutTrustIcon = keyof typeof aboutTrustIcons;

export interface AboutTrustPoint {
  icon: AboutTrustIcon;
  title: string;
  text: string;
}

export const about = {
  name: "Jerzy PolXXXX",
  role: "Autoryzowany Agent PZU",
  sectionTagline: "Poznaj swojego agenta",
  sectionTitle: "O mnie",
  sectionIntro:
    "Lokalny agent PZU z Krasnegostawu. Znasz mnie z okolicy, a z ubezpieczeniami pracuję z pełnym zapleczem największego ubezpieczyciela w Polsce.",
  headline: "Najpierw rozmowa, potem dobrze dobrana ochrona",
  paragraphs: [
    "Mieszkam i pracuję w Krasnymstawie, dlatego dobrze rozumiem <span class=\"about-body__accent\">potrzeby lokalnych klientów</span>. Pomagam dobrać ubezpieczenia dopasowane do konkretnej sytuacji.<br /><span class=\"about-body__accent\">Autoryzowany Agent PZU</span> oferuję sprawdzone rozwiązania i przejrzyste warunki.",
    "Obsługuję Krasnystaw i okoliczne miejscowości. Możliwe jest spotkanie osobiste lub kontakt telefoniczny. <span class=\"about-body__accent\">Zapraszam do kontaktu</span> w celu omówienia potrzeb lub weryfikacji obecnej polisy.",
  ],
  trustPoints: [
    {
      icon: "shield",
      title: "Autoryzowany Agent PZU",
      text: "Pełne zaplecze największego ubezpieczyciela w Polsce.",
    },
    {
      icon: "mapPin",
      title: "Krasnystaw i okolice",
      text: "Obsługuję lokalnie — spotkanie też poza biurem.",
    },
    {
      icon: "refresh",
      title: "Polisa od A do Z",
      text: "Dobór, zakup, wznowienia, zmiany — wszystko u jednej osoby.",
    },
    {
      icon: "user",
      title: "Stały kontakt, nie infolinia",
      text: "Dzwonisz do mnie bezpośrednio. Oddzwaniam tego samego dnia.",
    },
  ] satisfies AboutTrustPoint[],
  primaryCtaLabel: "Porozmawiajmy",
  secondary: {
    label: "Dowiedz się więcej o mnie",
    href: "/oferta",
  },
} as const;
