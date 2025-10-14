"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export const metadata = {
  title: "Articles — FOCUS Documentaire",
  description:
    "Analyses, critiques et études de films : le cinéma documentaire à travers des textes écrits par des passionnés, des étudiants...",
openGraph: {
    images: ["/images/logo.png"],
  },
  };
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  // Filtrer les articles selon la recherche
  const filteredArticles = articles.filter((a) =>
    a.titre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* === HEADER === */}
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
            className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          >
            Actualités
          </Link>
          <Link
            href="/articles"
             className="px-4 py-2 rounded-full text-white bg-green-700 font-medium border border-transparent hover:bg-green-800 transition-all duration-300"
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

      {/* === BARRE DE RECHERCHE === */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-5 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>

      {/* === LISTE DES ARTICLES === */}
      <section className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Articles et textes autour des films
        </h1>

        {/* Masonry-style layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredArticles.map((article, index) => (
            <Link key={index} href={article.lien}>
              <div className="break-inside-avoid bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden">
                <img
                  src={article.image}
                  alt={article.titre}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.titre}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {article.auteur} — {article.date}
                  </p>
                  <p className="text-gray-700">{article.resume}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Aucun article trouvé.
          </p>
        )}
      </section>
    </main>
  );
}
