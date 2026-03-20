/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_SEO_TITLE?: string;
  readonly PUBLIC_SEO_DESCRIPTION?: string;
  readonly PUBLIC_SITE_NAME?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_COMPANY_NAME?: string;
  readonly PUBLIC_COMPANY_TAGLINE?: string;
  readonly PUBLIC_COMPANY_PHONE?: string;
  readonly PUBLIC_COMPANY_EMAIL?: string;
  readonly PUBLIC_COMPANY_STREET?: string;
  readonly PUBLIC_COMPANY_CITY?: string;
  readonly PUBLIC_COMPANY_ZIP?: string;
  readonly PUBLIC_COMPANY_FACEBOOK?: string;
  readonly PUBLIC_COMPANY_INSTAGRAM?: string;
  readonly PUBLIC_COMPANY_LINKEDIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
