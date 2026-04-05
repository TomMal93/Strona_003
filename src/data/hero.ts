export const hero = {
  tagline: "Twój agent ubezpieczeniowy",
  title:
    'Twoje <span class="hero-shimmer">bezpieczeństwo</span><br>w dobrych rękach',
  description:
    "Rekomenduję tylko rozwiązania, które sam wybrałbym dla swojej rodziny. Jasne warunki, brak ukrytych kosztów.",
  advisorCard: {
    availability: "Oddzwaniam tego samego dnia",
    role: "Agent PZU • Krasnystaw i okolice",
    quote:
      "Najpierw porządkujemy sytuację, potem dobieramy ochronę. Bez pośpiechu i bez przypadkowych decyzji.",
    specialties: ["Pakiety medyczne", "Polisy grupowe", "Ubezpieczenia na życie"],
  },
  actions: {
    primary: { label: "Zadzwoń teraz" },
    secondary: { label: "O mnie", href: "#o-mnie" },
    tertiary: { label: "Zobacz ofertę", href: "#oferta" },
  },
  stats: [
    { value: "15+", label: "lat doświadczenia" },
    { value: "1000+", label: "zadowolonych klientów" },
    { value: "0 zł", label: "za konsultację" },
  ],
} as const;
