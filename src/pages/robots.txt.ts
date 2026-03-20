import { seo } from "../data/seo";

export const GET = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${seo.url}/sitemap-index.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
