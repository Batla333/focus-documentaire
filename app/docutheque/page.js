"use client";
import { useState } from "react";
import Link from "next/link";


export default function Docutheque() {
  const [filmActif, setFilmActif] = useState(null);


  const films = [
    {
      titre: "Tout ce qu'on laisse",
      realisateur: "Jules Corneloup et Remy Labat",
      annee: 2025,
      videoUrl: "https://youtube.com/embed/WkxoaSzy1zw",
      description: "Un portrait intime de François Corneloup, musicien et père.",
      image: "/images/TOUTCEQUONLAISSE.png",
    },
    
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-10">

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

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        La Docuthèque
      </h1>

      {/* grille des films */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film, index) => (
          <div
            key={index}
            id={film.titre.replace(/\s+/g, "-")} // <
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
              {film.realisateur} — {film.annee}
            </p>
          </div>
        ))}
      </div>

      {/* lecteur vidéo modal */}
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
            <h2 className="text-2xl font-semibold mt-4">
              {filmActif.titre}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {filmActif.realisateur} — {filmActif.annee}
            </p>
            <p className="text-gray-700">{filmActif.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}