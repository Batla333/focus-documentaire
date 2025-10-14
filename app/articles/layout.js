export const metadata = {
  title: "Articles — FOCUS Documentaire",
  description:
    "Analyses, critiques et études de films : le cinéma documentaire à travers des textes écrits par des passionnés, des étudiants...",
openGraph: {
    images: ["/images/logo.png"],
  },
  };
  
export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}