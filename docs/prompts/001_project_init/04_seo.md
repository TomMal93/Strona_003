# Prompt — SEO Setup

## Cel

Zaimplementuj podstawowe SEO w projekcie Astro.

---

## Zakres

Zaimplementuj:
- meta tagi w Layout.astro
- wykorzystanie danych z seo.ts i company.ts
- JSON-LD (Organization)

---

## Wymagania

Dodaj:
- title
- meta description
- viewport
- canonical
- Open Graph:
  - og:title
  - og:description
  - og:type
  - og:url
  - og:image

---

## Structured Data

JSON-LD — wygeneruj dwa bloki:

1. Organization:
   - name
   - url
   - logo

2. LocalBusiness:
   - type: InsuranceAgency
   - name
   - address (PostalAddress — ulica, miasto, kod, kraj)
   - telephone
   - email
   - openingHours
   - geo (latitude, longitude)
   - areaServed
   - url
   - sameAs (profile społecznościowe — placeholder tablica)

Dane NAP (Name, Address, Phone) muszą być spójne między JSON-LD a company.ts.

---

## Lokalizacja danych

src/data/
- seo.ts
- company.ts

---

## Pliki statyczne

Wygeneruj:
- public/robots.txt — zezwól na indeksowanie, wskaż sitemap
- public/sitemap.xml — statyczny, z jednym URL (strona główna); dodaj komentarz, że przy rozbudowie przejść na @astrojs/sitemap

---

## Lokalizacja i język

Dodaj w <head>:
- <link rel="alternate" hreflang="pl" href="{canonical}" />
- <meta name="geo.region" content="PL" />
- <meta name="geo.placename" content="{miasto z company.ts}" />

---

## Wymagania

- meta w <head>
- poprawna struktura HTML
- brak duplikacji
- dane NAP spójne we wszystkich miejscach

---

## Output format

Zwróć:
- Layout.astro (zaktualizowany)
- seo.ts
- company.ts
- public/robots.txt
- public/sitemap.xml

---

## Update rule

Zaktualizuj istniejący Layout.astro — nie twórz nowego.
Zachowaj istniejącą strukturę pliku.
