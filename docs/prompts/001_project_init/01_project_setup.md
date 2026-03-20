# Prompt — Project Setup (Astro Starter Core)

## Stack

- Astro 6.x
- TypeScript 5.9.x (strict)
- Tailwind CSS 4.x
- @tailwindcss/vite
- Node 22 LTS
- Netlify deployment

---

## Cel

Stwórz szkielet projektu strony firmowej dla agenta ubezpieczeniowego.

Projekt ma być:
- lekki (bez SPA)
- dobrze zorganizowany
- gotowy do rozbudowy
- bez zbędnego boilerplate'u

Na tym etapie NIE implementuj sekcji HERO ani komponentów UI.

---

## Wymagania technologiczne

- Astro + TypeScript (strict)
- Tailwind v4 przez @tailwindcss/vite
- brak React/Vue/Svelte
- minimalny JS
- gotowe pod Netlify

---

## Zakres

Zaimplementuj:
- struktura folderów
- Layout
- index page (pusty placeholder)
- konfiguracja Tailwind v4
- global styles
- design tokens
- utilities CSS
- data (company.ts, seo.ts — placeholder)

Nie implementuj:
- Hero
- Button
- Container
- żadnych sekcji UI

---

## Struktura

src/
  components/
    ui/
  layouts/
    Layout.astro
  pages/
    index.astro
  data/
    company.ts
    seo.ts
  styles/
    global.css
    themes/tokens.css
    utilities/layout.css
    animations/transitions.css

---

## Tailwind

- użyj @tailwindcss/vite
- nie twórz tailwind.config.js jeśli nie jest konieczny
- korzystaj głównie z utility classes
- tokens.css tylko dla zmiennych

---

## Layout

- ustaw <html lang="pl">
- dodaj viewport meta
- przygotuj <head> pod SEO (placeholdery)
- slot na content

---

## Typografia

- Google Fonts
- oddzielny font dla nagłówków i body

---

## Code correctness

- TypeScript strict
- brak any
- brak niejawnych typów
- poprawne importy

---

## Output format

Zwróć:
- pełną strukturę plików
- pełną zawartość każdego pliku
- każdy plik w osobnym bloku kodu
- ścieżka jako nagłówek

Nie pomijaj żadnych plików.
