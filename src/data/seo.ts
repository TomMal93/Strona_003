import { readEnv } from "./env";

export const seo = {
  title: readEnv("PUBLIC_SEO_TITLE", "Agent Ubezpieczeniowy — Nazwa Firmy"),
  description: readEnv(
    "PUBLIC_SEO_DESCRIPTION",
    "Profesjonalne usługi ubezpieczeniowe. Ubezpieczenia na życie, majątkowe, komunikacyjne i firmowe.",
  ),
  ogImage: "/og-image.jpg",
  locale: "pl_PL",
  siteName: readEnv("PUBLIC_SITE_NAME", "Nazwa Firmy"),
  url: readEnv("PUBLIC_SITE_URL", "https://example.pl"),
} as const;
