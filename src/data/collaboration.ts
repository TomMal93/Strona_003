export interface CollaborationStep {
  number: string;
  title: string;
  description: string;
  iconPath: string;
}

export const collaboration = {
  sectionTitle: "Jak wygląda współpraca",
  sectionIntro:
    "Bez formalnego skryptu i bez infolinii. Cztery proste kroki — od pierwszego kontaktu po opiekę już po podpisaniu polisy.",
  steps: [
    {
      number: "01",
      title: "Pierwszy kontakt",
      description:
        "Dzwonisz, piszesz lub wpadasz do biura w Krasnymstawie. Bez formularzy, bez infolinii — od razu rozmawiamy o tym, z czym przychodzisz.",
      iconPath:
        "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    },
    {
      number: "02",
      title: "Rozmowa o potrzebach",
      description:
        "Pytam o Twoją sytuację, to co chcesz chronić i czego się obawiasz. Krótko, po ludzku i bez ubezpieczeniowego żargonu.",
      iconPath:
        "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    },
    {
      number: "03",
      title: "Dobór rozwiązania",
      description:
        "Z pełnej oferty PZU dobieram ochronę dopasowaną do Ciebie. Tłumaczę, co obejmuje, a czego nie — żebyś wiedział, co kupujesz.",
      iconPath:
        "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
    {
      number: "04",
      title: "Finalizacja i opieka",
      description:
        "Podpisujemy polisę, a ja zostaję z Tobą — przy wznowieniach, zmianach w umowie i przy szkodzie. Jedna osoba, do której wracasz.",
      iconPath:
        "M20 6 9 17l-5-5",
    },
  ] satisfies CollaborationStep[],
  ctaLabel: "Umów rozmowę",
  ctaHref: "#kontakt",
} as const;
