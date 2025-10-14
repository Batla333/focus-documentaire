import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "FOCUS documentaire",
  description: "Un espace dédié au cinéma documentaire",
  keywords: [
    "cinéma documentaire",
    "focus documentaire",
    "films documentaires",
    "étudiants cinéma",
    "docuthèque",
    "FOCUS documentaire site",
    "documentaire"
  ],
  openGraph: {
    title: "FOCUS documentaire",
    description:
      "Un espace dédié au cinéma documentaire : actualités, entretiens et films étudiants.",
    url: "https://focus-documentaire.vercel.app",
    siteName: "FOCUS documentaire",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Focus Documentaire",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
  <meta name="google-site-verification" content="BKgpIER5IzYL1k3KiwJOD8jFznXYcio2eu4oL_WHozI" />
  <meta name="description" content="Focus Documentaire : actualités, articles, entretiens, films documentaires" />
  <meta name="robots" content="index, follow" />
  <link rel="icon" href="/favicon.ico" />
</head>
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
export const metadata = {
  title: "FOCUS Documentaire — Un espace dedié au cinéma documentaire.",
  description:
    "FOCUS Documentaire explore le cinéma du réel : actualités, articles, critiques, médiathèque documentiare...",
openGraph: {
    images: ["/images/logo.png"],
  },
};

