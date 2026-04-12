# Sekcja O mnie

## Cel

Przedstawić agenta profesjonalnie i zachęcająco do kontaktu, zachowując spójność wizualną i treściową z resztą strony (Hero → Services → FAQ). Sekcja ma balansować ludzki, lokalny charakter z sygnałem eksperta wspartego marką PZU. Pozycja na stronie: **między Services a FAQ**, kotwica `id="o-mnie"` (używana już przez secondary CTA w Hero).

## Założenia

- **Lokalność jako główny atut** — Krasnystaw obecny w nagłówku i treści, bez sztucznej listy miejscowości i SEO-copy
- **Zaplecze PZU jako tarcza** — eksponujemy siłę marki i produktów, nie lata doświadczenia
- **Bez liczb i niepotwierdzonych claimów** — żadnych "X lat", "Y klientów" (zgodnie z `docs/SekcjaOMnie.md`)
- **Uczciwe wykorzystanie CV**: agent ma wcześniejsze doświadczenie w sprzedaży ubezpieczeń (analiza potrzeb, oferty, relacje) i autentyczny lokalny ślad jako założyciel zespołu Etylen z Krasnegostawu — to prawdziwe fakty, które można użyć bez retuszu
- **Układ**: dwukolumnowy — zdjęcie (lewa) + tekst/CTA (prawa); stack na mobile
- **Trust block**: 4 punkty — Autoryzowany Agent PZU, Krasnystaw i okolice, Pełna obsługa polisy, Stały kontakt bez infolinii

## Rekomendowana struktura

1. **Header sekcji** (wzorzec z FAQ/Services):
   - Ikona-wrapper (akcent, radial gradient)
   - `<h2>`: "O mnie" lub "Poznaj swojego agenta"
   - Intro paragraph + divider

2. **Layout dwukolumnowy**:
   - **Lewa (`about-portrait`)**: zdjęcie agenta, aspect-ratio 4/5, miękki gradient-ring w akcencie, rounded-lg (styl Hero image card)
   - **Prawa (`about-body`)**:
     - `<h3>` headline lokalno-osobisty: *"Z Krasnegostawu — dla Krasnegostawu i okolic"*
     - 3 akapity (szkic niżej)
     - Trust-grid 2×2 (4 punkty zaufania)
     - CTA row: PhoneButton (lg) + Button (accent) → `#oferta`

3. **Mobile (< 860px)**: kolumny stackują się pionowo, zdjęcie na górze, trust-grid → 1 kolumna

## Szkic treści

**Headline**: *"Z Krasnegostawu — dla Krasnegostawu i okolic"*

**Akapit 1 (lokalność — osobista, konkretna)**:
> Mieszkam i pracuję w Krasnymstawie. Poza ubezpieczeniami od lat prowadzę lokalny zespół muzyczny Etylen, znany w całej Lubelszczyźnie z wesel, festynów i eventów. To sprawia, że znam tu wielu ludzi osobiście — i wiem, że w rozmowie o ubezpieczeniu liczy się zaufanie, a nie skrypt sprzedażowy.

**Akapit 2 (zaplecze PZU + doświadczenie w temacie)**:
> Jako Autoryzowany Agent PZU mam za sobą zarówno pracę w bezpośrednim kontakcie z klientem, jak i doświadczenie w doborze i sprzedaży ubezpieczeń — analizie potrzeb, przygotowaniu oferty i prowadzeniu polisy w czasie. Stoję za tym zapleczem największego ubezpieczyciela w Polsce: sprawdzone produkty, szkolenia, jasne procedury.

**Akapit 3 (sposób pracy + zaproszenie)**:
> Nie sprzedaję z katalogu. Najpierw rozmawiamy o tym, co masz do ochrony — samochód, dom, rodzinę, firmę, gospodarstwo — a dopiero potem szukamy rozwiązania. Obsługuję Krasnystaw i najbliższe okolice, spotykamy się u mnie, u Ciebie albo po prostu rozmawiamy telefonicznie. Zadzwoń — niezobowiązująco.

**Trust points** (4):
- `shield` — **Autoryzowany Agent PZU** / *"Pełne zaplecze największego ubezpieczyciela w Polsce."*
- `map-pin` — **Krasnystaw i okolice** / *"Obsługuję lokalnie — spotkanie też poza biurem."*
- `refresh` — **Polisa od A do Z** / *"Dobór, zakup, wznowienia, zmiany — wszystko u jednej osoby."*
- `user` — **Stały kontakt, nie infolinia** / *"Dzwonisz do mnie bezpośrednio. Oddzwaniam tego samego dnia."*

**CTA row**: `PhoneButton` (lg) + `Button` (variant accent, href `#oferta`, label "Zobacz zakres pomocy")

## Wskazówki SEO i tonu

- Krasnystaw musi pojawić się w `<h3>` i przynajmniej w dwóch akapitach — naturalnie, nie jako słowo-klucz
- Fraza "Autoryzowany Agent PZU" w treści (wspiera `agent PZU Krasnystaw`)
- "Krasnystaw i okolice" jako powtarzalny motyw zamiast listy miejscowości
- Ton: pierwszoosobowy, zapraszający, bez formalnego żargonu; zakończenie akapitu 3 niezobowiązującym CTA
- Nie wspominać wprost o "początkach w PZU" ani o latach — zaplecze marki i wcześniejsze doświadczenie w ubezpieczeniach załatwia temat wiarygodności

## Założenia do implementacji

### Nowe pliki

1. **`src/data/about.ts`** — typed content module (wzór: `src/data/faq.ts`, `src/data/hero.ts`):
   ```ts
   export const about = {
     name: "Jerzy PolXXXX",          // placeholder — zgodny z hero.ts
     role: "Autoryzowany Agent PZU",
     headline: "Z Krasnegostawu — dla Krasnegostawu i okolic",
     paragraphs: [ /* 3 akapity z szkicu */ ],
     trustPoints: [ /* 4 wpisy: icon, title, text */ ],
     photoSrc: "…",                  // fallback → hero-main-image.webp
     cta: { secondaryLabel: "Zobacz zakres pomocy", secondaryHref: "#oferta" },
   } as const;

   export const aboutTrustIcons = { shield, mapPin, refresh, user };  // inline SVG paths
   ```

2. **`src/components/AboutMe.astro`** — nowy komponent:
   - `<section id="o-mnie" class="section-padding">` + `<Container>`
   - Struktura shell → shell__inner → section header → layout grid (portrait + body)
   - Reużywa: `Container`, `PhoneButton` (size="lg"), `Button` (variant="accent"), `<Image>` z `astro:assets`

3. **`src/styles/components/about.css`** — nowy plik stylów:
   - `.about-shell`, `.about-shell__inner`, `.about-section__header/icon-wrapper/title/intro/divider` — skopiowane wzorce z `faq.css` (prefix `about-*`)
   - `.about-layout` — CSS grid `minmax(0,1fr) minmax(0,1.4fr)`, gap `clamp(2rem, 4vw, 3.5rem)`, media query `< 860px` → 1 kolumna
   - `.about-portrait` — wrapper z `aspect-ratio: 4/5`, `border-radius: var(--radius-lg)`, subtelny gradient-ring w akcencie
   - `.about-body__paragraph` — `line-height: 1.75`, kolor `rgba(255,255,255,.78)`, pierwszy akapit `font-size` większy (lead-in)
   - `.about-trust-grid` — grid 2×2 (desktop) / 1 kol. (mobile)
   - `.about-cta-row` — flex row, wrap na mobile

### Modyfikacja

4. **`src/pages/index.astro`** — import `AboutMe` i osadzenie między `<Services />` a `<FAQ />`:
   ```astro
   <Hero />
   <Services />
   <AboutMe />
   <FAQ />
   ```

### Reużyte komponenty/wzorce

- `src/components/ui/Container.astro` — wrapper max-width
- `src/components/ui/PhoneButton.astro` — primary CTA (size="lg"), identyczne z Hero
- `src/components/ui/Button.astro` — secondary CTA (variant="accent"), kształt wyrównany do PhoneButton w poprzedniej zmianie
- `astro:assets` `<Image>` — optymalizacja portretu
- Wzorce CSS shell/header/divider z `src/styles/components/faq.css`
- Tokeny z `src/styles/themes/tokens.css`: `--color-bg-alt`, `--color-accent*`, `--radius-lg`, `--font-heading`, `--color-accent-rgb`
- Klasa globalna `.section-padding`

### Assety — otwarte punkty

- **Zdjęcie agenta**: brak w `src/assets/`. Rozwiązanie tymczasowe: `photoSrc` wskazuje na istniejące `src/assets/hero-main-image.webp`, żeby build przechodził; użytkownik podmienia ścieżkę po dostarczeniu docelowego portretu
- **Imię/nazwisko**: placeholder `"Jerzy PolXXXX"` (spójny z `hero.ts`) — do jednoczesnej podmiany w `about.ts` i `hero.ts`

## Test Plan

1. `pnpm dev` (lub `npm run dev`) — start dev servera
2. Otwórz stronę w przeglądarce i sprawdź:
   - Sekcja pojawia się **między Ofertą a FAQ**
   - Kotwica `#o-mnie` działa: kliknięcie secondary CTA w Hero przewija do sekcji
   - Nagłówek/ikona/divider wyglądają spójnie z FAQ i Services (te same radiusy, kolory akcentu, cień)
   - Zdjęcie renderuje się (fallback), nie psuje layoutu
   - Desktop ≥ 900px: układ dwukolumnowy; mobile < 860px: stack pionowy ze zdjęciem na górze
   - Trust-grid: 2×2 na desktop, 1 kol. na mobile
   - PhoneButton lg i Button accent mają **ten sam kształt** (`px-7 py-3 rounded-lg`)
3. Treść:
   - Krasnystaw wyraźnie obecny w nagłówku i ≥1 akapicie
   - Brak sztucznej listy miejscowości i fraz SEO
   - Brak liczb typu "X lat / Y klientów"
   - Ton zapraszający, zakończenie niezobowiązującym CTA
4. `pnpm build` — build przechodzi (weryfikacja importu zdjęcia)
