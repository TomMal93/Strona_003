import type { APIRoute } from "astro";
import { about } from "../data/about";
import { company } from "../data/company";

const escape = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");

export const GET: APIRoute = ({ site }) => {
  const tel = company.phone.replace(/\s/g, "");
  const url = site?.href ?? "";
  const address = company.address;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escape(about.name)}`,
    `N:${escape(about.name)};;;;`,
    `ORG:${escape(`PZU — ${company.name}`)}`,
    `TITLE:${escape(about.role)}`,
    `TEL;TYPE=CELL,VOICE:${tel}`,
    `EMAIL;TYPE=INTERNET:${company.email}`,
    `ADR;TYPE=WORK:;;${escape(address.street)};${escape(address.city)};;${escape(address.zip)};PL`,
    url ? `URL:${url}` : "",
    "END:VCARD",
  ].filter(Boolean);

  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="agent-pzu-krasnystaw.vcf"',
    },
  });
};
