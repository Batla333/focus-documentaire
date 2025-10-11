"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./components/HeaderSearch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col">

      {/* Header */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
        <img
          src="/images/logo.png"
          alt="FOCUS documentaire"
          className="w-50 h-auto object-contain"
        />

         {/* Barre de recherche */}
          <HeaderSearch />
        

        {/* Navigation */}
        <nav className="flex gap-4">
          <Link href="#" className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300">Actualités</Link>
          <Link href="#" className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300">Articles</Link>
          <Link href="#" className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300">Contact</Link>
        </nav>
      </header>

      {/* Hero / Introduction */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-center mb-6">
          <span className="text-black">FOCUS</span>{"  "}{"  "}
            <span style={{ color: "#2e6417" }}>documentaire</span>  
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Un espace dédié au cinéma documentaire : actualités, articles, entretiens, films...
        </p>
      </section>

      {/* Sections exemples */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-green-600 font-bold mb-3">À la une</h2>
          <p className="text-gray-400">Derniers articles et critiques.</p>
        </div>
        <Link href="/docutheque">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl text-green-600 font-bold mb-3">La Docuthèque</h2>
            <p className="text-gray-400">Découvrez une sélection de films documentaires expérimentaux, étudiants, amateurs...</p>
          </div>
        </Link>
      </section>

      {/* Galerie Réalisateurs */}
     
<section className="w-full py-12">
  <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
    Galerie de réalisateur·ice·s documentaires
  </h2>

  <div className="max-w-6xl mx-auto">
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      loop={false}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <Link href="/realisateur.ice.s/Depardon">
          <div className="cursor-pointer text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/RAYMOND_DEPARDON_AUTOPORTRAIT.jpg"
              alt="Raymond Depardon"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto hover:scale-105 transition-transform duration-300"
            />
            <h3 className="mt-3 font-semibold text-lg text-gray-800">
              Raymond Depardon
            </h3>
          </div>
        </Link>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <Link href="/realisateur.ice.s/Saab">
          <div className="cursor-pointer text-center">
            <img
              src="/images/saab.jpg"
              alt="Jocelyne Saab"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto hover:scale-105 transition-transform duration-300"
            />
            <h3 className="mt-3 font-semibold text-lg text-gray-800">
              Jocelyne Saab
            </h3>
          </div>
        </Link>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <Link href="/realisateur.ice.s/Cavalier">
          <div className="cursor-pointer text-center">
            <img
              src="/images/CAVALIER.jpg"
              alt="Alain Cavalier"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto hover:scale-105 transition-transform duration-300"
            />
            <h3 className="mt-3 font-semibold text-lg text-gray-800">
              Alain Cavalier
            </h3>
          </div>
        </Link>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <Link href="/realisateur.ice.s/Simon">
          <div className="cursor-pointer text-center">
            <img
              src="/images/clairesimon.jpg"
              alt="Claire Simon"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto hover:scale-105 transition-transform duration-300"
            />
            <h3 className="mt-3 font-semibold text-lg text-gray-800">
              Claire Simon
            </h3>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
        

      {/* Footer */}
      <footer className="bg-white mt-auto shadow-inner py-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500">
          © 2025 FOCUS Documentaire. Tous droits réservés.
        </div>
      </footer>

    </main>
  );
}