export interface CollaborationStep {
  number: string;
  title: string;
  description: string;
  iconPath: string;
}

export const collaboration = {
  sectionTitle: "Jak wygląda współpraca",
  sectionIntro:
    "Bez formalnego skryptu i bez infolinii.<br />Cztery proste kroki - od pierwszego kontaktu po opiekę już po podpisaniu polisy.",
  closingNote:
    "Na każdym etapie rozmawiasz z <strong>jedną osobą</strong> i od razu wiesz, co robimy dalej.<br />Bez odbijania między działami, bez zgadywania, co obejmuje polisa.",
  steps: [
    {
      number: "01",
      title: "Pierwszy kontakt",
      description:
        "Dzwonisz, piszesz albo przychodzisz do biura.<br />Od początku rozmawiasz ze mną bezpośrednio, bez formularzy i bez infolinii.",
      iconPath:
        "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    },
    {
      number: "02",
      title: "Rozmowa o potrzebach",
      description:
        "Pytam o Twoją sytuację,<br />to co chcesz chronić i czego się obawiasz.<br />Krótko, po ludzku i bez ubezpieczeniowego żargonu.",
      iconPath:
        "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    },
    {
      number: "03",
      title: "Dobór rozwiązania",
      description:
        "Dobieram ochronę z PZU<br />do Twojej sytuacji.<br />Wyjaśniam, co obejmuje polisa i czego nie zawiera - żebyś wiedział, co wybierasz.",
      iconPath:
        "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
    {
      number: "04",
      title: "Finalizacja i opieka",
      description:
        "Finalizujemy polisę,<br />a potem dalej masz kontakt<br />ze mną - przy wznowieniach, zmianach w umowie i wtedy, gdy trzeba zgłosić szkodę.",
      iconPath:
        "M20 6 9 17l-5-5",
    },
  ] satisfies CollaborationStep[],
  ctaLabel: "Zapraszam do kontaktu",
  ctaHref: "#kontakt",
} as const;
