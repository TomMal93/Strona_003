# Prompt — UI Components (Button + Container)

## Cel

Zaimplementuj bazowe komponenty UI dla projektu Astro.

---

## Zakres

Zaimplementuj:
- Button.astro
- Container.astro

Nie implementuj:
- Hero
- SEO
- layoutu

---

## Lokalizacja

src/components/ui/

---

## Button

Wymagania:
- warianty: primary, secondary
- hover
- focus-visible
- dostępność (focus ring)
- semantyczny element (<button> lub <a>)

---

## Container

- max-width
- centrowanie
- padding poziomy
- używany jako wrapper layoutu

---

## Stylowanie

- Tailwind jako baza
- brak nadmiarowego CSS
- brak @apply jeśli niepotrzebne

---

## Naming

- PascalCase dla komponentów
- propsy typowane (TypeScript strict)

---

## Accessibility

- focus-visible
- odpowiedni kontrast

---

## Code correctness

- brak any
- strict TS
- brak nieużywanego kodu

---

## Output format

Zwróć tylko:
- Button.astro
- Container.astro

Każdy plik w osobnym bloku kodu.

---

## Design tokens

- korzystaj z wartości z tokens.css jeśli to możliwe
- nie hardkoduj kolorów bez potrzeby
