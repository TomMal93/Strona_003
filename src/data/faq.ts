export interface FaqItem {
  group?: string;
  shortLabel?: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    group: "Początek współpracy",
    shortLabel: "Koszty",
    question: "Czy współpraca z agentem ubezpieczeniowym wiąże się z dodatkowymi kosztami?",
    answer:
      "Nie. Moje wsparcie jest bezpłatne dla klienta, ponieważ wynagrodzenie otrzymuję od towarzystwa ubezpieczeniowego. Możesz więc spokojnie skonsultować swoją sytuację i porównać warianty bez dodatkowych opłat po swojej stronie.",
  },
  {
    group: "Początek współpracy",
    shortLabel: "Proces",
    question: "Jak wygląda proces zakupu ubezpieczenia?",
    answer:
      "Najpierw rozmawiamy o Twoich potrzebach, zakresie ochrony i sytuacji życiowej albo firmowej. Następnie przygotowuję propozycję, wyjaśniam różnice między wariantami i pomagam przejść przez formalności tak, żeby decyzja była świadoma, a nie przypadkowa.",
  },
  {
    group: "Początek współpracy",
    shortLabel: "Przygotowanie",
    question: "Jakie informacje są potrzebne, żeby przygotować wstępną ofertę?",
    answer:
      "To zależy od rodzaju ubezpieczenia, ale na start zwykle wystarczy krótki opis Twojej sytuacji i tego, czego chcesz zabezpieczyć. Jeśli potrzebne będą dodatkowe dane lub dokumenty, od razu wskażę dokładnie co przygotować, bez zostawiania Cię z niejasną listą formalności.",
  },
  {
    group: "Początek współpracy",
    shortLabel: "Termin",
    question: "Jak szybko mogę otrzymać wstępną ofertę?",
    answer:
      "W wielu przypadkach wstępną ofertę mogę przygotować nawet tego samego dnia, szczególnie przy prostszych zapytaniach indywidualnych i firmowych. Jeśli temat wymaga szerszej analizy, od razu uprzedzam, ile czasu będzie realnie potrzebne.",
  },
  {
    group: "Obsługa i wsparcie",
    shortLabel: "Opieka",
    question: "Czy pomagasz także przy zgłaszaniu szkód?",
    answer:
      "Tak. Wspieram klientów również na etapie zgłaszania i likwidacji szkód, pomagam uporządkować dokumenty i wskazuję kolejne kroki. Dzięki temu nie zostajesz sam z procedurą w najważniejszym momencie.",
  },
  {
    group: "Obsługa i wsparcie",
    shortLabel: "Zmiany",
    question: "Czy mogę wrócić po czasie, jeśli będę chciał coś zmienić w polisie?",
    answer:
      "Tak, możesz wrócić także po zawarciu ubezpieczenia. Jeśli zmieni się Twoja sytuacja, zakres ochrony albo pojawią się pytania dotyczące aktualnej polisy, pomogę ocenić, co warto zaktualizować i jakie będą kolejne kroki.",
  },
  {
    group: "Obsługa i wsparcie",
    shortLabel: "Kontakt",
    question: "Czy współpraca jest możliwa również zdalnie?",
    answer:
      "Tak, wiele spraw możemy omówić zdalnie, jeśli tak jest Ci wygodniej. Gdy potrzebny jest kontakt osobisty lub lokalna obsługa, forma współpracy może być dopasowana do konkretnej sytuacji, bez niepotrzebnego komplikowania całego procesu.",
  },
];
