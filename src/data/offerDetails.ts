import { services } from "./services";

export interface OfferProduct {
  name: string;
  description: string;
}

export interface OfferCategory {
  id: string;
  serviceVariant: "health" | "default" | "business";
  icon: string;
  title: string;
  subtitle: string;
  extendedDescription: string;
  features: string[];
  products: OfferProduct[];
  ctaText: string;
}

export const offerCategories: OfferCategory[] = [
  {
    id: "zdrowotne",
    serviceVariant: "health",
    icon: services[0].icon,
    title: "Ubezpieczenia zdrowotne",
    subtitle: "Prywatna opieka medyczna PZU",
    extendedDescription:
      "Ubezpieczenia zdrowotne PZU zapewniają dostęp do szerokiej sieci placówek medycznych w&nbsp;całej Polsce — bez kolejek i&nbsp;skierowań. Dzięki nim możesz korzystać z&nbsp;konsultacji specjalistycznych, badań diagnostycznych i&nbsp;zabiegów ambulatoryjnych wtedy, kiedy ich potrzebujesz." +
      "<br><br>" +
      "Jako agent PZU w&nbsp;Krasnymstawie pomagam dobrać wariant ochrony zdrowotnej dopasowany do Twoich potrzeb i&nbsp;budżetu — zarówno dla osób indywidualnych, jak i&nbsp;całych rodzin. Wyjaśniam zakres świadczeń, różnice między pakietami i&nbsp;pomagam w&nbsp;późniejszej obsłudze polisy.",
    features: [
      "Konsultacje u lekarzy specjalistów bez skierowań",
      "Badania diagnostyczne i laboratoryjne",
      "Opieka szpitalna i ambulatoryjna",
      "Programy profilaktyczne i bilanse zdrowia",
      "Konsultacje online — telemedycyna",
      "Rehabilitacja i fizjoterapia",
      "Opieka stomatologiczna",
      "Opieka okulistyczna i optyka",
      "Second opinion — druga opinia medyczna",
      "Dostęp do sieci placówek PZU Zdrowie w całej Polsce",
    ],
    products: [
      {
        name: "PZU w Trosce o Zdrowie",
        description:
          "Kompleksowy pakiet opieki medycznej z dostępem do specjalistów, badań i zabiegów ambulatoryjnych.",
      },
      {
        name: "PZU Opieka Medyczna",
        description:
          "Elastyczny program zdrowotny dla osób indywidualnych i rodzin z możliwością wyboru zakresu świadczeń.",
      },
      {
        name: "PZU Plan na Zdrowie",
        description:
          "Ubezpieczenie łączące ochronę zdrowotną z programem profilaktycznym i dostępem do telemedycyny.",
      },
    ],
    ctaText: "Zapytaj o ubezpieczenie zdrowotne",
  },
  {
    id: "na-zycie",
    serviceVariant: "default",
    icon: services[1].icon,
    title: "Ubezpieczenia na życie",
    subtitle: "Ochrona finansowa rodziny",
    extendedDescription:
      "Ubezpieczenia na życie PZU to zabezpieczenie finansowe na wypadek nieprzewidzianych zdarzeń — choroby, wypadku czy śmierci. Polisa chroni Ciebie i&nbsp;Twoją rodzinę, zapewniając środki na leczenie, rehabilitację lub utrzymanie bliskich w&nbsp;trudnych momentach." +
      "<br><br>" +
      "Pomagam klientom z&nbsp;Krasnegostawu i&nbsp;okolic wybrać odpowiedni zakres ochrony — od podstawowego ubezpieczenia na życie, przez ochronę na wypadek poważnych chorób, po programy oszczędnościowe na przyszłość dzieci. Każdą polisę dobieram indywidualnie do sytuacji rodzinnej i&nbsp;finansowej.",
    features: [
      "Ubezpieczenie na życie i dożycie",
      "Ochrona na wypadek poważnej choroby",
      "Świadczenia szpitalne i operacyjne",
      "Zabezpieczenie przyszłości dzieci",
      "Ubezpieczenie od następstw nieszczęśliwych wypadków (NNW)",
      "Świadczenie na wypadek trwałego uszczerbku na zdrowiu",
      "Ubezpieczenie na wypadek niezdolności do pracy",
      "Programy oszczędnościowe i inwestycyjne",
      "Renty i świadczenia okresowe",
      "Ochrona kredytobiorców",
    ],
    products: [
      {
        name: "PZU Ochrona Życia",
        description:
          "Klasyczne ubezpieczenie na życie z możliwością rozszerzenia o dodatkowe ryzyka — choroby, wypadki, pobyt w szpitalu.",
      },
      {
        name: "PZU Życie z Myślą o Rodzinie",
        description:
          "Polisa rodzinna obejmująca ochroną współmałżonka i dzieci, z elastycznym zakresem świadczeń.",
      },
      {
        name: "PZU Ubezpieczenie na Przyszłość",
        description:
          "Program łączący ochronę życia z elementem oszczędnościowym — na edukację dzieci lub dodatkową emeryturę.",
      },
      {
        name: "PZU NNW",
        description:
          "Ubezpieczenie od następstw nieszczęśliwych wypadków — dla dorosłych, dzieci i młodzieży szkolnej.",
      },
    ],
    ctaText: "Zapytaj o ubezpieczenie na życie",
  },
  {
    id: "firmowe",
    serviceVariant: "business",
    icon: services[2].icon,
    title: "Ubezpieczenia firmowe",
    subtitle: "Kompleksowa ochrona przedsiębiorstwa",
    extendedDescription:
      "Ubezpieczenia firmowe PZU chronią majątek przedsiębiorstwa, odpowiedzialność cywilną oraz pracowników. Niezależnie od branży i&nbsp;wielkości firmy — od jednoosobowej działalności po średnie przedsiębiorstwa — pomagam dobrać ochronę, która zabezpieczy najważniejsze ryzyka biznesowe." +
      "<br><br>" +
      "Współpracuję z&nbsp;przedsiębiorcami z&nbsp;Krasnegostawu i&nbsp;okolic, pomagając zrozumieć zakres polisy i&nbsp;dobrać wariant dopasowany do specyfiki działalności. Zajmuję się obsługą od pierwszej rozmowy, przez przygotowanie oferty, po pomoc przy likwidacji szkody.",
    features: [
      "Ubezpieczenie majątku firmy — budynki, maszyny, wyposażenie",
      "OC działalności gospodarczej",
      "OC zawodowe",
      "Ubezpieczenie floty pojazdów firmowych",
      "Ubezpieczenia grupowe pracowników",
      "Ubezpieczenie od przerw w działalności",
      "Ubezpieczenie mienia w transporcie (cargo)",
      "Ubezpieczenie sprzętu elektronicznego",
      "OC członków zarządu (D&O)",
      "Ubezpieczenie ryzyk budowlano-montażowych",
    ],
    products: [
      {
        name: "PZU Firma",
        description:
          "Kompleksowe ubezpieczenie majątku i odpowiedzialności cywilnej dla małych i średnich przedsiębiorstw.",
      },
      {
        name: "PZU Ubezpieczenia Grupowe",
        description:
          "Ochrona życia i zdrowia pracowników — pakiety grupowe z możliwością objęcia ochroną również rodzin.",
      },
      {
        name: "PZU Flota",
        description:
          "Ubezpieczenie komunikacyjne dla flot firmowych — OC, AC, NNW kierowcy i pasażerów, assistance.",
      },
      {
        name: "PZU OC Zawodowe",
        description:
          "Ubezpieczenie odpowiedzialności cywilnej z tytułu wykonywania zawodu — dla wolnych zawodów i specjalistów.",
      },
    ],
    ctaText: "Zapytaj o ubezpieczenie firmowe",
  },
];

export const offerPageSeo = {
  title: "Oferta ubezpieczeń PZU — Krasnystaw i okolice | Agent PZU",
  description:
    "Pełna oferta ubezpieczeń PZU w Krasnymstawie: ubezpieczenia zdrowotne, na życie i firmowe. Bezpłatne doradztwo agenta ubezpieczeniowego — dobiorę ochronę dopasowaną do Twoich potrzeb.",
} as const;
