export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Czy współpraca z agentem ubezpieczeniowym wiąże się z dodatkowymi kosztami?",
    answer:
      "Nie, moje usługi są bezpłatne dla klienta. Wynagrodzenie otrzymuję od towarzystwa ubezpieczeniowego, dzięki czemu możesz skorzystać z profesjonalnego doradztwa bez dodatkowych opłat.",
  },
  {
    question: "Jak wygląda proces zakupu ubezpieczenia?",
    answer:
      "Najpierw rozmawiamy o Twoich potrzebach i sytuacji. Następnie przygotowuję ofertę, pomagam porównać opcje, a po wyborze prowadzę Cię przez formalności do samego końca.",
  },
  {
    question: "Czy pomagasz także przy zgłaszaniu szkód?",
    answer:
      "Tak, wspieram klientów również na etapie zgłaszania i likwidacji szkód. Pomagam przygotować dokumentację i uporządkować cały proces.",
  },
  {
    question: "Jak szybko mogę otrzymać wstępną ofertę?",
    answer:
      "W wielu przypadkach wstępna oferta może być przygotowana nawet tego samego dnia, zwłaszcza dla prostszych zapytań indywidualnych i firmowych.",
  },
];
