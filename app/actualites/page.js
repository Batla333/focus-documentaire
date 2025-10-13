"use client";
import Link from "next/link";

export default function Actualites() {
  const articles = [
    {
      titre: "Festival International du Film Documentaire",
      date: "12 octobre 2025",
      description:
        "Une sélection de films documentaires du monde entier à Paris.",
      image: "/images/festival.jpg",
      lien: "#",
      principal: true,
    },
    {
      titre: "Projection spéciale ‘Portraits de village’",
      date: "20 octobre 2025",
      description:
        "Projection suivie d’un débat avec le réalisateur.",
      image: "/images/projection.jpg",
      lien: "#",
    },
    {
      titre: "Sortie cinéma : ‘Le Vent du Soir’",
      date: "15 novembre 2025",
      description:
        "Nouvelle sortie dans les salles françaises.",
      image: "/images/ventdusoir.jpg",
      lien: "#",
    },
    {
      titre: "Atelier documentaire étudiant",
      date: "5 décembre 2025",
      description: "Découvrez les jeunes talents du documentaire.",
      image: "/images/atelier.jpg",
      lien: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      {/* Header */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
        <Link
      href="/"
    >
       <img
      src="/images/logo.png"
      alt="FOCUS documentaire"
      className="w-50 h-auto rounded-none shadow-none object-contain"
    />
    </Link>
         <nav className="flex gap-4">
          <Link
            href="/actualites"
            className="px-4 py-2 rounded-full text-white bg-green-700 font-medium border border-transparent hover:bg-green-800 transition-all duration-300"
          >
            Actualités
          </Link>
          <Link
            href="/articles"
             className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          > Articles
            
          </Link>
          <Link
            href="/contacts"
            className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          >
            Contacts
          </Link>
        </nav>
      </header>

      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Actualités
      </h1>

      {/* Article principal */}
      {articles.filter(a => a.principal).map((article, i) => (
        <div
          key={i}
          className="relative w-full mb-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={article.image}
            alt={article.titre}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
            <h2 className="text-4xl font-bold mb-2">{article.titre}</h2>
            <p className="mb-4">{article.description}</p>
            <Link
              href={article.lien}
              className="inline-block px-4 py-2 bg-green-700 rounded hover:bg-green-800 transition"
            >
              Lire la suite
            </Link>
          </div>
        </div>
      ))}

      {/* Articles secondaires en grille */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.filter(a => !a.principal).map((article, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.titre}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                {article.titre}
              </h3>
              <p className="text-gray-500 mb-2">{article.date}</p>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <Link
                href={article.lien}
                className="inline-block px-4 py-2 text-white bg-green-700 rounded hover:bg-green-800 transition"
              >
                Lire la suite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}