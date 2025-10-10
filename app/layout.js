import "./globals.css";

export const metadata = {
  title: "FOCUS Documentaire",
  description: "Un espace dédié au cinéma documentaire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
