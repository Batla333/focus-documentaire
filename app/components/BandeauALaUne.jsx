// app/components/BandeauALaUne.jsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function BandeauALaUne({ slides = [] }) {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.titre}
                className="w-full h-full object-cover"
              />
              {/* dégradés verts gauche/droite */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-transparent to-green-900/30"></div>

              {/* texte sur image */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
                <h2 className="text-3xl font-bold mb-2">{slide.titre}</h2>
                <p className="bg-green-700 inline-block px-4 py-2 rounded-full text-sm">
                  {slide.sousTitre}
                </p>
              </div>

              <Link href={slide.lien} className="absolute inset-0"></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
