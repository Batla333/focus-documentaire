"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Docutheque() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");
  const [filmActif, setFilmActif] = useState(null);

  // Charger les films depuis /data/films.json
  useEffect(() => {
    fetch("/data/films.json")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => console.error("Erreur de chargement des films :", err));
  }, []);

  // Filtrer les films selon la recherche
  const filteredFilms = films.filter((film) => {
  const titreMatch = film.titre.toLowerCase().includes(query.toLowerCase());

  // Gère le cas où "realisateur" est soit une chaîne, soit un tableau
  const realMatch = Array.isArray(film.realisateur)
    ? film.realisateur.some((r) =>
        r.toLowerCase().includes(query.toLowerCase())
      )
    : film.realisateur.toLowerCase().includes(query.toLowerCase());

  return titreMatch || realMatch;
});

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* === HEADER === */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
        <Link href="/">
          <img
            src="/images/logoblanc.png"
            alt="FOCUS documentaire"
            className="w-50 h-auto object-contain"
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
            className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          >
            Articles
          </Link>
          <Link
            href="/contacts"
            className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          >
            Contacts
          </Link>
        </nav>
      </header>

      {/* === TITRE PRINCIPAL === */}
      
        <div className="flex justify-center mb-12">
  <img
    src="/images/focusdocuthequegris.png"
    alt="Focus Docuthèque"
    className="h-[90px] w-auto object-contain"
  />
</div>

      {/* === BARRE DE RECHERCHE === */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-5 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>

      {/* === GRILLE DES FILMS === */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {filteredFilms.map((film, index) => (
          <div
            key={index}
            onClick={() => setFilmActif(film)}
            className="cursor-pointer group"
          >
            <div className="max-w-[180px] mx-auto relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
              <img
                src={film.image}
                alt={film.titre}
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-md transition-transform group-hover:scale-105"
              />
            </div>
            <h2 className="text-lg font-semibold mt-2 text-center text-gray-900">
              {film.titre}
            </h2>
            <p className="text-sm text-gray-500 text-center">
              {film.realisateur.join(", ")} — {film.annee}
            </p>
          </div>
        ))}
      </div>

      {/* === MODAL LECTEUR VIDÉO === */}
      {filmActif && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setFilmActif(null)}
        >
          <div
            className="bg-white rounded-xl p-4 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFilmActif(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <div className="aspect-video">
              <iframe
                src={filmActif.videoUrl}
                title={filmActif.titre}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <h2 className="text-2xl font-semibold mt-4">{filmActif.titre}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {filmActif.realisateur.join(", ")} — {filmActif.annee}
            </p>
            <p className="text-gray-700">{filmActif.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
