import { readEnv } from "./env";

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
  social: {
    facebook: readEnv("PUBLIC_COMPANY_FACEBOOK", ""),
    instagram: readEnv("PUBLIC_COMPANY_INSTAGRAM", ""),
    linkedin: readEnv("PUBLIC_COMPANY_LINKEDIN", ""),
  },
} as const;
