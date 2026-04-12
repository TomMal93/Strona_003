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
    group: "Decyzja i dopasowanie",
    shortLabel: "Wybór",
    question: "Skąd mam wiedzieć, które ubezpieczenie będzie dla mnie naprawdę odpowiednie?",
    answer:
      "To właśnie jeden z najważniejszych elementów mojej pracy. Nie zaczynam od gotowej polisy, tylko od rozmowy o Twojej sytuacji, priorytetach i tym, co chcesz realnie zabezpieczyć. Dzięki temu łatwiej wybrać rozwiązanie dopasowane do potrzeb, a nie przypadkowy wariant z ogólnej oferty.",
  },
  {
    group: "Decyzja i dopasowanie",
    shortLabel: "Porównanie",
    question: "Czy mogę porównać kilka wariantów przed podjęciem decyzji?",
    answer:
      "Tak. Przygotowuję warianty i wyjaśniam między nimi najważniejsze różnice, tak żeby było jasne, za co faktycznie płacisz i jaki zakres ochrony otrzymujesz. Dzięki temu możesz podjąć decyzję spokojnie, bez presji i bez zgadywania, która opcja będzie rozsądniejsza.",
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
