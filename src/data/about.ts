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
    "Mieszkam i pracuję w Krasnymstawie, dlatego dobrze znam potrzeby osób i rodzin z okolicy. Pomagam wybrać <span class=\"about-body__accent\">ochronę dopasowaną do konkretnej sytuacji</span> - rzeczowo, spokojnie i bez zbędnych formalności.",
    "Zapewniam kontakt i wsparcie na każdym etapie współpracy - od wyboru polisy po jej późniejszą obsługę. Jako <span class=\"about-body__accent\">Autoryzowany Agent PZU</span> oferuję sprawdzone rozwiązania oraz zaplecze największego ubezpieczyciela w Polsce.",
    "Możemy porozmawiać telefonicznie albo spotkać się osobiście - w zależności od tego, co będzie dla Ciebie wygodniejsze.",
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
    label: "Poznaj mnie bliżej",
    href: "/o-mnie",
  },
  page: {
    url: "/o-mnie",
    seoTitle: "Agent PZU Krasnystaw — kontakt, godziny pracy i obszar działania",
    seoDescription:
      "Autoryzowany Agent PZU w Krasnymstawie. Dane kontaktowe, godziny pracy, obszar działania i pełna wizytówka agenta. Spotkanie osobiste lub zdalne.",
    eyebrow: "Wizytówka agenta",
    headline: "Bezpośredni kontakt z agentem — bez infolinii",
    tagline:
      "Poniżej znajdziesz wszystko, co potrzebne do szybkiego kontaktu: telefon, e-mail, godziny pracy, obszar obsługi i gotową wizytówkę do zapisania w kontaktach.",
    extendedParagraphs: [
      "Jestem lokalnym agentem PZU w&nbsp;Krasnymstawie. Nie pracujesz ze zmieniającą się infolinią — rozmawiasz bezpośrednio ze&nbsp;mną, od pierwszego kontaktu, przez dobór polisy, aż po późniejszą obsługę.",
      "Obsługuję zarówno klientów indywidualnych, jak i&nbsp;firmy oraz gospodarstwa rolne. Spotkanie możemy umówić w&nbsp;biurze w&nbsp;Krasnymstawie, u&nbsp;Ciebie w&nbsp;domu lub w&nbsp;firmie, albo załatwić wszystko zdalnie — telefonicznie, mailowo lub przez komunikator.",
      "Jeśli masz już polisę PZU zawartą gdzie indziej, mogę przejąć jej obsługę — wznowienia, zmiany, zgłoszenia. Wystarczy jedna rozmowa, żeby sprawdzić, czy aktualna ochrona jest dopasowana do Twojej sytuacji.",
    ],
    qualifications: [
      {
        icon: "shield",
        title: "Autoryzowany Agent PZU",
        text: "Pełne zaplecze największego ubezpieczyciela w Polsce.",
      },
      {
        icon: "mapPin",
        title: "Krasnystaw i okolice",
        text: "Działam mobilnie — spotkanie w biurze, u Ciebie lub zdalnie.",
      },
      {
        icon: "refresh",
        title: "Polisa od A do Z",
        text: "Dobór, zakup, wznowienia, zmiany — wszystko u jednej osoby.",
      },
      {
        icon: "user",
        title: "Stały kontakt, nie infolinia",
        text: "Dzwonisz bezpośrednio do mnie. Oddzwaniam tego samego dnia.",
      },
      {
        icon: "shield",
        title: "Doradztwo bezpłatne",
        text: "Pierwsza rozmowa i wycena polisy zawsze bez zobowiązań.",
      },
      {
        icon: "refresh",
        title: "Pomoc przy szkodach",
        text: "Prowadzę Cię przez proces zgłoszenia i rozliczenia szkody.",
      },
      {
        icon: "user",
        title: "Klienci indywidualni i firmy",
        text: "Polisy komunikacyjne, majątkowe, życiowe, rolne i firmowe.",
      },
      {
        icon: "mapPin",
        title: "Spotkanie poza biurem",
        text: "Jeśli wygodniej — dojadę do Ciebie w okolicach Krasnegostawu.",
      },
    ] satisfies AboutTrustPoint[],
    hoursTitle: "Godziny pracy",
    hoursRows: [
      { day: "Poniedziałek – Piątek", hours: "08:30 – 16:30" },
      { day: "Sobota", hours: "po wcześniejszym umówieniu" },
      { day: "Niedziela", hours: "kontakt telefoniczny w sprawach pilnych" },
    ],
    hoursNote:
      "Poza godzinami pracy możesz zostawić wiadomość głosową lub napisać — oddzwaniam najpóźniej następnego dnia roboczego.",
    contactTitle: "Dane kontaktowe",
    areaTitle: "Obszar obsługi",
    areaIntro:
      "Biuro w Krasnymstawie, ale pracuję mobilnie. Obsługuję klientów z całego powiatu krasnostawskiego oraz regularnie z Lublina, Zamościa i Chełma.",
    vcardLabel: "Pobierz wizytówkę (.vcf)",
    vcardHint: "Zapisz moje dane w kontaktach jednym kliknięciem.",
    socialHeading: "Znajdź mnie też tutaj",
  },
} as const;

export interface AboutHoursRow {
  day: string;
  hours: string;
}
