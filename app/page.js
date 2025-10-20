"use client";
import Header from "./components/Header";
import BlocDocutheque from "./components/BlocDocutheque";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function Home() {
  const realisateurs = [
    {
      nom: "Raymond Depardon",
      image: "/images/depardon.jpg",
      lien: "/realisateur.ice.s/Depardon",
    },
    {
      nom: "Alain Cavalier",
      image: "/images/Cavalier.jpg",
      lien: "/realisateur.ice.s/Cavalier",
    },
    {
      nom: "Claire Simon",
      image: "/images/clairesimon.jpg",
      lien: "/realisateur.ice.s/Simon",
    },
    {
      nom: "Jocelyne Saab",
      image: "/images/saab.jpg",
      lien: "/realisateur.ice.s/Saab",
    },
  ];

  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      {/* === HEADER === */}
      <Header />

      {/* === BANDEAU A LA UNE === */}
      <section className="relative w-full h-[70vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-full"
        >
          {/* === SLIDE 1 === */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/images/beyrouthmaville.jpg"
                alt="Nouvel article, Beyrouth, ma ville."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-transparent to-green-900/50" />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-bold">À la une — Nouvel article en ligne</h2>
                <p className="text-lg max-w-xl">
                  Beyrouth, ma ville - Jocelyne Saab, une auteure libanaise au service de la parole resistante, survivante de Beyrouth.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* === SLIDE 2 === */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/images/dima.png"
                alt="Dima Halal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-transparent to-green-900/50" />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-bold">À la une — Dima Halal</h2>
                <p className="text-lg max-w-xl">
                  Disponible dès maintenant sur la Docuthèque de FOCUS documentaire
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* === SLIDE 3 === */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/images/escales2025.jpg"
                alt="Film à la une 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-transparent to-green-900/50" />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-bold">À la une — Les Escales Documentaires de La Rochelle</h2>
                <p className="text-lg max-w-xl">
                  Dès le 7 novembre 2025, nous serons présents aux Escales Documentaire !
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* === BLOC DOCUTHEQUE === */}
      <div className="my-20">
        <BlocDocutheque />
      </div>

      {/* === GALERIE DES REALISATEURS === */}
      <section className="w-full py-20 bg-[#f5f5f5]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Galerie de réalisateur.ice.s documentaires
        </h2>

        <div className="flex overflow-x-auto gap-10 px-10 scrollbar-hide pb-6">
          {realisateurs.map((r, index) => (
            <Link
              key={index}
              href={r.lien}
              className="flex-none w-56 group text-center"
            >
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                <img
                  src={r.image}
                  alt={r.nom}
                  className="w-full h-72 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-green-700">
                {r.nom}
              </h3>
            </Link>
          ))}
        </div>
      </section>
        {/* === FOOTER === */}
      <footer className="w-full bg-white text-center py-6 border-t border-gray-200 text-gray-500">
        Copyright © 2025 FOCUS documentaire
      </footer>
    </main>
  );
}
