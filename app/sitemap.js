export default function sitemap() {
  return [
    {
      url: "https://focus-documentaire.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://focus-documentaire.vercel.app/docutheque",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}