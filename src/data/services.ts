export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2" />',
    title: "Zdrowotne",
    subtitle: "Opieka medyczna",
    description:
      "Dostęp do prywatnej opieki medycznej, konsultacji specjalistycznych i badań diagnostycznych.",
    features: [
      "Konsultacje u specjalistów",
      "Badania diagnostyczne i laboratoryjne",
      "Opieka szpitalna i ambulatoryjna",
      "Programy profilaktyczne",
    ],
  },
  {
    icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />',
    title: "Na życie",
    subtitle: "Ochrona rodziny",
    description:
      "Zabezpieczenie finansowe dla Ciebie i Twojej rodziny na wypadek nieprzewidzianych zdarzeń.",
    features: [
      "Ubezpieczenie na życie i dożycie",
      "Ochrona na wypadek choroby",
      "Świadczenia szpitalne",
      "Zabezpieczenie przyszłości dzieci",
    ],
  },
  {
    icon: '<path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />',
    title: "Firmowe",
    subtitle: "Dla przedsiębiorców",
    description:
      "Kompleksowa ochrona majątku firmy, odpowiedzialności cywilnej i pracowników.",
    features: [
      "Ubezpieczenie majątku firmy",
      "OC działalności gospodarczej",
      "Ubezpieczenia grupowe pracowników",
      "Ochrona od przerw w działalności",
    ],
  },
];
