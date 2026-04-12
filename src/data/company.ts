import { readEnv, readEnvNumber } from "./env";

export const company = {
  name: readEnv("PUBLIC_COMPANY_NAME", "Nazwa Firmy"),
  tagline: readEnv("PUBLIC_COMPANY_TAGLINE", "Agent ubezpieczeniowy"),
  phone: readEnv("PUBLIC_COMPANY_PHONE", "+48 000 000 000"),
  email: readEnv("PUBLIC_COMPANY_EMAIL", "kontakt@example.pl"),
  address: {
    street: readEnv("PUBLIC_COMPANY_STREET", "ul. Przykładowa 1"),
    city: readEnv("PUBLIC_COMPANY_CITY", "Warszawa"),
    zip: readEnv("PUBLIC_COMPANY_ZIP", "00-000"),
  },
  serviceAreas: ["Krasnystaw", "Zamość", "Chełm", "Lublin"],
  schema: {
    openingHours: readEnv("PUBLIC_COMPANY_OPENING_HOURS", "Mo-Fr 09:00-17:00"),
    geo: {
      latitude: readEnvNumber("PUBLIC_COMPANY_GEO_LATITUDE", 52.2297),
      longitude: readEnvNumber("PUBLIC_COMPANY_GEO_LONGITUDE", 21.0122),
    },
  },
  social: {
    facebook: readEnv("PUBLIC_COMPANY_FACEBOOK", ""),
    instagram: readEnv("PUBLIC_COMPANY_INSTAGRAM", ""),
    linkedin: readEnv("PUBLIC_COMPANY_LINKEDIN", ""),
  },
} as const;

export const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
