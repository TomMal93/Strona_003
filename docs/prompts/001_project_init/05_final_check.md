# Prompt — Final Check / Refactor

## Cel

Sprawdź i popraw cały projekt Astro.

---

## Zakres

Zweryfikuj:

1. Poprawność importów
2. Spójność struktury plików
3. TypeScript strict (bez błędów i warningów)
4. Brak any i niejawnych typów
5. Czy projekt się kompiluje
6. Czy komponenty są poprawnie użyte
7. Czy Layout zawiera SEO
8. Czy Hero używa Button i Container
9. Czy nie ma nieużywanego kodu
10. Czy nie ma duplikacji stylów

---

## Weryfikacja build

Uruchom poniższe komendy i napraw wszystkie błędy:

1. `npx astro check` — weryfikacja typów i składni Astro
2. `npx tsc --noEmit` — weryfikacja TypeScript strict
3. `npm run build` — pełny build produkcyjny

Iteruj aż wszystkie trzy komendy przejdą bez błędów i warningów.
Jeśli błąd wymaga zmiany w wielu plikach — napraw wszystkie.

---

## Performance

- brak client-side hydration
- brak zbędnego JS
- obrazy poprawne (alt, CLS)

---

## Styling

- brak konfliktów Tailwind vs CSS
- tokens używane poprawnie

---

## Output

Zwróć:
- log z każdej komendy weryfikacyjnej (astro check, tsc, build)
- pliki, które wymagały poprawy (z opisem co i dlaczego zmieniono)

Jeśli wszystkie komendy przeszły bez poprawek:
- napisz "OK — projekt gotowy" i załącz logi jako dowód
