export interface WhyMePair {
  anon: {
    label: string;
    detail: string;
  };
  me: {
    label: string;
    detail: string;
  };
}

export const whyMe = {
  sectionTitle: "Dlaczego warto",
  sectionIntro:
    "Ubezpieczenie to nie tylko polisa — to człowiek, który ją prowadzi.<br />Zobacz, co dostajesz, gdy wybierasz mnie zamiast anonimowego kanału sprzedaży.",
  columnLabels: {
    anon: "Anonimowy kanał sprzedaży",
    me: "W moim biurze",
  },
  pairs: [
    {
      anon: {
        label: "Infolinia i call center",
        detail: "Odbiera konsultant, który widzi Cię pierwszy raz.",
      },
      me: {
        label: "Lokalny agent z Krasnegostawu",
        detail: "Rozmawiasz zawsze z tą samą osobą, którą znasz osobiście.",
      },
    },
    {
      anon: {
        label: "Za każdym razem nowa osoba",
        detail: "Historię sprawy tłumaczysz od początku przy każdym kontakcie.",
      },
      me: {
        label: "Jedna stała osoba do kontaktu",
        detail: "Od doboru ochrony po szkodę — prowadzę Cię ja, bez przekazywania dalej.",
      },
    },
    {
      anon: {
        label: "Wąski wybór produktów",
        detail: "Skrypt sprzedażowy i kilka standardowych pakietów.",
      },
      me: {
        label: "Pełna oferta PZU",
        detail: "Dobieram ochronę dopasowaną do Twoich potrzeb i sytuacji życiowej.",
      },
    },
    {
      anon: {
        label: "Skomplikowany żargon i skrypty",
        detail: "Warunki ogólne czytasz sam — potem dowiadujesz się, czego nie obejmują.",
      },
      me: {
        label: "Rozmowa po ludzku",
        detail: "Tłumaczę warunki tak, żebyś wiedział, co kupujesz i na co liczyć.",
      },
    },
    {
      anon: {
        label: "Sprzedają, co mają w pakiecie",
        detail: "Konsultant realizuje plan sprzedażowy, nie Twoje potrzeby.",
      },
      me: {
        label: "Obiektywna rada",
        detail: "Powiem Ci też, czego nie potrzebujesz — nie sprzedaję na siłę.",
      },
    },
  ] satisfies WhyMePair[],
  closingNote:
    "Dlatego warto wybrać <strong>agenta</strong>, a nie anonimowy kanał sprzedaży — różnicę czuć dopiero wtedy, gdy coś się dzieje.",
} as const;
