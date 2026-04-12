import { services } from "./services";

/* ── Interfaces ── */

export interface PersonaBenefit {
  label: string;
  detail: string;
}

export interface PersonaProduct {
  name: string;
  description: string;
}

export interface PersonaFaqItem {
  question: string;
  answer: string;
}

export interface PersonaScenario {
  id: string;
  serviceVariant: "family" | "individual" | "business";
  icon: string;
  title: string;
  subtitle: string;
  seoHeading: string;
  personaDescription: string;
  benefits: PersonaBenefit[];
  products: PersonaProduct[];
  faq: PersonaFaqItem[];
  agentQuote: string;
  ctaText: string;
}

/* ── Data ── */

export const personaScenarios: PersonaScenario[] = [
  {
    id: "dla-rodziny",
    serviceVariant: "family",
    icon: services[1].icon,
    title: "Dla rodziny",
    subtitle: "Ochrona najbliższych i\u00A0spokój na co dzień",
    seoHeading: "Ubezpieczenia zdrowotne i\u00A0na życie",
    personaDescription:
      "Szukasz ochrony zdrowotnej dla siebie i\u00A0bliskich? Chcesz mieć pewność, że w\u00A0razie choroby czy wypadku Twoja rodzina będzie zabezpieczona finansowo? Pomagam dobrać pakiet ubezpieczeń, który obejmie zdrowie, życie i\u00A0przyszłość Twoich dzieci — bez zbędnych kosztów.",
    benefits: [
      {
        label: "Prywatna opieka medyczna dla całej rodziny",
        detail:
          "Dostęp do specjalistów, badań i\u00A0zabiegów bez kolejek — dla Ciebie, partnera i\u00A0dzieci.",
      },
      {
        label: "Zabezpieczenie finansowe na wypadek choroby lub wypadku",
        detail:
          "Świadczenia z\u00A0polisy na życie pokryją koszty leczenia i\u00A0utrzymania rodziny w\u00A0trudnych momentach.",
      },
      {
        label: "NNW dla dzieci — ochrona w\u00A0szkole i\u00A0po lekcjach",
        detail:
          "Ubezpieczenie od następstw nieszczęśliwych wypadków obejmuje zajęcia szkolne, sport i\u00A0czas wolny.",
      },
      {
        label: "Oszczędności na przyszłość dzieci",
        detail:
          "Programy łączące ochronę życia z\u00A0elementem oszczędnościowym — na studia lub start w\u00A0dorosłość.",
      },
    ],
    products: [
      {
        name: "PZU Opieka Medyczna",
        description:
          "Elastyczny program zdrowotny dla rodzin — wybierasz zakres świadczeń dopasowany do potrzeb i\u00A0budżetu.",
      },
      {
        name: "PZU Życie z\u00A0Myślą o\u00A0Rodzinie",
        description:
          "Polisa rodzinna obejmująca ochroną współmałżonka i\u00A0dzieci, z\u00A0elastycznym zakresem świadczeń.",
      },
      {
        name: "PZU NNW",
        description:
          "Ubezpieczenie od następstw nieszczęśliwych wypadków — dla dorosłych, dzieci i\u00A0młodzieży szkolnej.",
      },
      {
        name: "PZU Ubezpieczenie na Przyszłość",
        description:
          "Program łączący ochronę życia z\u00A0elementem oszczędnościowym — na edukację dzieci lub dodatkową emeryturę.",
      },
    ],
    faq: [
      {
        question: "Czy mogę ubezpieczyć całą rodzinę w\u00A0jednej polisie?",
        answer:
          "Tak — polisy rodzinne PZU obejmują współmałżonka i\u00A0dzieci w\u00A0ramach jednej umowy. Zakres ochrony można dopasować indywidualnie dla każdego członka rodziny.",
      },
      {
        question: "Od jakiego wieku można ubezpieczyć dziecko?",
        answer:
          "Ubezpieczenie NNW jest dostępne od urodzenia. Polisy zdrowotne obejmują dzieci zazwyczaj od\u00A01.\u00A0miesiąca życia, a\u00A0programy oszczędnościowe można założyć w\u00A0dowolnym momencie.",
      },
      {
        question: "Ile kosztuje ubezpieczenie zdrowotne dla rodziny?",
        answer:
          "Koszt zależy od wybranego pakietu i\u00A0liczby osób. Zadzwoń — bezpłatnie przygotuję kalkulację dopasowaną do Twojej sytuacji.",
      },
    ],
    agentQuote:
      "To ubezpieczenie najczęściej polecam rodzinom z\u00A0dziećmi w\u00A0wieku szkolnym — łączy ochronę zdrowia z\u00A0zabezpieczeniem na wypadek zdarzeń losowych, a\u00A0program oszczędnościowy pozwala odkładać na przyszłość dzieci.",
    ctaText: "Zapytaj o\u00A0ubezpieczenie dla rodziny",
  },
  {
    id: "dla-siebie",
    serviceVariant: "individual",
    icon: services[0].icon,
    title: "Dla siebie",
    subtitle: "Zdrowie, bezpieczeństwo i\u00A0spokój o\u00A0przyszłość",
    seoHeading: "Ubezpieczenia zdrowotne, NNW i\u00A0na życie",
    personaDescription:
      "Zależy Ci na szybkim dostępie do lekarzy specjalistów? Chcesz zabezpieczyć się finansowo na wypadek choroby lub wypadku? Pomagam dobrać ubezpieczenie dopasowane do Twojego stylu życia — od prywatnej opieki medycznej, przez NNW, po programy oszczędnościowe.",
    benefits: [
      {
        label: "Prywatna opieka medyczna bez kolejek",
        detail:
          "Konsultacje u\u00A0specjalistów, badania diagnostyczne i\u00A0telemedycyna — kiedy ich potrzebujesz, nie za kilka miesięcy.",
      },
      {
        label: "Ochrona finansowa na wypadek choroby lub wypadku",
        detail:
          "Polisa na życie zapewnia środki na leczenie, rehabilitację i\u00A0utrzymanie, jeśli nie będziesz mógł pracować.",
      },
      {
        label: "NNW — ochrona przy aktywnym trybie życia",
        detail:
          "Ubezpieczenie od następstw nieszczęśliwych wypadków obejmuje sport, podróże i\u00A0codzienne ryzyka.",
      },
      {
        label: "Oszczędności i\u00A0dodatkowa emerytura",
        detail:
          "Programy oszczędnościowo-inwestycyjne PZU pozwalają budować kapitał na przyszłość równolegle z\u00A0ochroną życia.",
      },
    ],
    products: [
      {
        name: "PZU w\u00A0Trosce o\u00A0Zdrowie",
        description:
          "Kompleksowy pakiet opieki medycznej — specjaliści, badania, zabiegi ambulatoryjne i\u00A0profilaktyka.",
      },
      {
        name: "PZU Plan na Zdrowie",
        description:
          "Ubezpieczenie łączące ochronę zdrowotną z\u00A0programem profilaktycznym i\u00A0dostępem do telemedycyny.",
      },
      {
        name: "PZU Ochrona Życia",
        description:
          "Klasyczne ubezpieczenie na życie z\u00A0możliwością rozszerzenia o\u00A0choroby, wypadki i\u00A0pobyt w\u00A0szpitalu.",
      },
    ],
    faq: [
      {
        question: "Czy ubezpieczenie zdrowotne zastępuje NFZ?",
        answer:
          "Nie zastępuje, ale uzupełnia. Dzięki polisie PZU masz dostęp do prywatnych placówek bez kolejek, zachowując jednocześnie prawa wynikające z\u00A0NFZ.",
      },
      {
        question: "Czy mogę później rozszerzyć zakres polisy?",
        answer:
          "Tak — większość ubezpieczeń PZU pozwala na rozszerzenie zakresu w\u00A0trakcie trwania umowy. Pomagam dobrać dodatkowe opcje, gdy zmieni się Twoja sytuacja.",
      },
      {
        question: "Jak szybko mogę skorzystać z\u00A0ubezpieczenia po podpisaniu umowy?",
        answer:
          "W przypadku ubezpieczeń zdrowotnych ochrona rozpoczyna się zazwyczaj w\u00A0ciągu kilku dni od zawarcia umowy. Dokładne terminy zależą od produktu — wyjaśnię je przy rozmowie.",
      },
    ],
    agentQuote:
      "Osobom pracującym na własny rachunek szczególnie polecam połączenie ubezpieczenia zdrowotnego z\u00A0polisą na życie — to ochrona, której nie zapewnia pracodawca, a\u00A0która daje realne bezpieczeństwo finansowe.",
    ctaText: "Zapytaj o\u00A0ubezpieczenie dla siebie",
  },
  {
    id: "dla-przedsiebiorcy",
    serviceVariant: "business",
    icon: services[2].icon,
    title: "Dla przedsiębiorcy",
    subtitle: "Kompleksowa ochrona firmy i\u00A0pracowników",
    seoHeading: "Ubezpieczenia firmowe i\u00A0grupowe",
    personaDescription:
      "Prowadzisz firmę i\u00A0chcesz zabezpieczyć majątek, odpowiedzialność cywilną i\u00A0pracowników? Niezależnie od branży — od jednoosobowej działalności po średnie przedsiębiorstwo — pomagam dobrać ochronę, która zabezpieczy najważniejsze ryzyka biznesowe.",
    benefits: [
      {
        label: "Ochrona majątku firmy i\u00A0OC działalności",
        detail:
          "Ubezpieczenie budynków, maszyn, wyposażenia i\u00A0odpowiedzialności cywilnej — od pożaru, kradzieży czy szkód u\u00A0klientów.",
      },
      {
        label: "Ubezpieczenia grupowe dla pracowników",
        detail:
          "Pakiety zdrowotne i\u00A0na życie jako benefit pracowniczy — pomagam wybrać wariant, który docenią Twoi ludzie.",
      },
      {
        label: "Flota firmowa pod ochroną",
        detail:
          "OC, AC, NNW kierowcy i\u00A0assistance dla wszystkich pojazdów firmowych w\u00A0jednej polisie.",
      },
      {
        label: "OC zawodowe i\u00A0ochrona zarządu",
        detail:
          "Ubezpieczenie odpowiedzialności cywilnej z\u00A0tytułu wykonywania zawodu oraz D&O dla członków zarządu.",
      },
    ],
    products: [
      {
        name: "PZU Firma",
        description:
          "Kompleksowe ubezpieczenie majątku i\u00A0odpowiedzialności cywilnej dla małych i\u00A0średnich przedsiębiorstw.",
      },
      {
        name: "PZU Ubezpieczenia Grupowe",
        description:
          "Ochrona życia i\u00A0zdrowia pracowników — pakiety grupowe z\u00A0możliwością objęcia ochroną również rodzin.",
      },
      {
        name: "PZU Flota",
        description:
          "Ubezpieczenie komunikacyjne dla flot firmowych — OC, AC, NNW kierowcy i\u00A0pasażerów, assistance.",
      },
      {
        name: "PZU OC Zawodowe",
        description:
          "Ubezpieczenie odpowiedzialności cywilnej z\u00A0tytułu wykonywania zawodu — dla wolnych zawodów i\u00A0specjalistów.",
      },
    ],
    faq: [
      {
        question: "Czy jednoosobowa działalność też może skorzystać z\u00A0ubezpieczenia firmowego?",
        answer:
          "Tak — PZU Firma obejmuje również jednoosobowe działalności gospodarcze. Zakres ochrony dopasuję do skali i\u00A0specyfiki Twojego biznesu.",
      },
      {
        question: "Czy ubezpieczenia grupowe są opłacalne przy małym zespole?",
        answer:
          "Tak — pakiety grupowe PZU są dostępne już od kilku osób. To atrakcyjny benefit pracowniczy, a\u00A0składki są niższe niż w\u00A0polisach indywidualnych.",
      },
      {
        question: "Jak wygląda pomoc przy likwidacji szkody firmowej?",
        answer:
          "Pomagam od zgłoszenia do wypłaty odszkodowania — tłumaczę procedury, pomagam skompletować dokumenty i\u00A0monitoruję postęp sprawy.",
      },
    ],
    agentQuote:
      "Przedsiębiorcom z\u00A0Krasnegostawu i\u00A0okolic najczęściej rekomenduję pakiet łączący ochronę majątku z\u00A0OC działalności — to fundament, na którym można budować dalszą ochronę w\u00A0miarę rozwoju firmy.",
    ctaText: "Zapytaj o\u00A0ubezpieczenie firmowe",
  },
];

export const offerPageSeo = {
  title:
    "Ubezpieczenia PZU — dla rodziny, na życie i dla firm | Agent Krasnystaw",
  description:
    "Ubezpieczenia zdrowotne, na życie i firmowe PZU w Krasnymstawie. Dobiorę ochronę dopasowaną do Twojej sytuacji — dla rodziny, dla siebie lub dla firmy. Bezpłatne doradztwo agenta.",
} as const;
