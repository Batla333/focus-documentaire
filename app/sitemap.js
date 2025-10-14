import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://focus-documentaire.vercel.app";

  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/docutheque`,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/articles`,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/actualites`,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/contacts`,
      changefreq: "yearly",
      priority: 0.5,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
