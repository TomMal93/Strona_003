export const whyMeIcons = {
  localAgent: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5 12 3l9 7.5" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.5V20h13V9.5" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20v-5h4v5" />
  `,
  singlePoint: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 20a7 7 0 0 1 14 0" />
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.5 14.5 1.8 1.8 3.2-3.6" />
  `,
  pzuCatalog: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.25 5 6v6.2c0 3.9 2.7 7.4 7 8.55 4.3-1.15 7-4.65 7-8.55V6l-7-2.75z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 11h6" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 14h4" />
  `,
  renewals: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 1 13-5.1" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.5 3.5v3.5H14" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12a7.5 7.5 0 0 1-13 5.1" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.5 20.5V17H10" />
  `,
  afterSale: `
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7.5h16v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-10z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
    <path stroke-linecap="round" stroke-linejoin="round" d="m9.5 13 2 2 3.5-3.5" />
  `,
} as const;

export type WhyMeIcon = keyof typeof whyMeIcons;

export interface WhyMePoint {
  icon: WhyMeIcon;
  title: string;
  text: string;
}

export const whyMe = {
  sectionTitle: "Dlaczego warto",
  sectionIntro:
    "Ubezpieczenie to nie tylko polisa — to człowiek, który ją prowadzi. Oto co dostajesz, gdy wybierasz mnie zamiast anonimowego kanału sprzedaży.",
  points: [
    {
      icon: "localAgent",
      title: "Lokalny agent, nie anonimowa infolinia",
      text: "Mieszkam i pracuję w Krasnymstawie. Kiedy dzwonisz, odbiera Ci ta sama osoba, z którą podpisywałeś polisę — nie pracownik call center, który widzi Cię pierwszy raz na ekranie.",
    },
    {
      icon: "singlePoint",
      title: "Jedna stała osoba do kontaktu",
      text: "Od pierwszej rozmowy, przez dobór ochrony, aż po zgłoszenie szkody — prowadzę Cię ja. Nie przekazuję sprawy dalej, nie odsyłam do działu, nie zaczynasz rozmowy od zera przy każdym kontakcie.",
    },
    {
      icon: "pzuCatalog",
      title: "Pełna znajomość produktów PZU",
      text: "Jako <strong>Autoryzowany Agent PZU</strong> znam cały portfel największego ubezpieczyciela w Polsce — OC i AC, dom, życie, zdrowie, firma, gospodarstwo. Dobieram rozwiązanie z tego, co rzeczywiście pasuje do Twojej sytuacji.",
    },
    {
      icon: "renewals",
      title: "Wznowienia i zmiany bez stresu",
      text: "Pilnuję terminów i przypominam zanim polisa wygaśnie. Zmieniasz auto, adres, dopisujesz współwłaściciela, korygujesz zakres ochrony — zwykle załatwiamy to telefonem w kilka minut, bez wizyt i papierologii.",
    },
    {
      icon: "afterSale",
      title: "Wsparcie także po zawarciu polisy",
      text: "Polisa to początek współpracy, nie jej koniec. Przy szkodzie pomagam przygotować zgłoszenie, zbieram potrzebne dokumenty i prowadzę Cię przez procedurę aż do wypłaty świadczenia.",
    },
  ] satisfies WhyMePoint[],
} as const;
