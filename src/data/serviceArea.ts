export type ServiceAreaAnnotationPosition = "n" | "s" | "e" | "w";

export interface ServiceAreaAnnotation {
  label: string;
  position: ServiceAreaAnnotationPosition;
}

export interface ServiceAreaContent {
  sectionTitle: string;
  sectionIntro: string;
  paragraphs: string[];
  mapLabel: string;
  mapAnnotations: ServiceAreaAnnotation[];
}

export const serviceArea = {
  sectionTitle: "Obszar działania",
  sectionIntro:
    "Działam mobilnie i bez sztywnego ograniczania się do jednego miasta. Spotkanie organizuję tam, gdzie faktycznie jest Ci najwygodniej.",
  paragraphs: [
    "Biuro mam w Krasnymstawie, ale pracuję dużo szerzej niż tylko stacjonarnie. Regularnie obsługuję klientów z Krasnegostawu, Lublina, Zamościa i Chełma, bo dla wielu osób liczy się nie adres biura, tylko szybki kontakt i konkretna pomoc.",
    "Jestem agentem mobilnym, więc dojeżdżam tam, gdzie spotkanie ma sens i oszczędza Twój czas. Powiat krasnostawski pozostaje naturalnym zapleczem codziennej pracy, ale równie swobodnie prowadzę sprawy klientów z większych miast regionu i okolicznych miejscowości.",
    "Jeśli wygodniej, większość spraw załatwimy zdalnie przez telefon, mail albo komunikator. A kiedy lepiej spotkać się osobiście, umawiamy termin w biurze albo w terenie, bez zbędnego komplikowania całego procesu.",
  ],
  mapLabel:
    "Stylizowana mapa obszaru działania z zaznaczonym Krasnymstawem oraz kierunkami do Lublina, Zamościa i Chełma.",
  mapAnnotations: [
    { label: "mobilny agent", position: "n" },
    { label: "Chełm →", position: "e" },
    { label: "Lublin ←", position: "w" },
    { label: "Zamość ↓", position: "s" },
  ],
} satisfies ServiceAreaContent;
