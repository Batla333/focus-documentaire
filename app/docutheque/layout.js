export const metadata = {
  title: "Docuthèque — FOCUS Documentaire",
  description:
    "Une sélection de films documentaires professionnels, étudiants et amateurs à découvrir dans la Docuthèque de FOCUS Documentaire.",
openGraph: {
    images: ["/images/logo.png"],
  },
  };
  
export default function DocuthequeLayout({ children }) {
  return <>{children}</>;
}