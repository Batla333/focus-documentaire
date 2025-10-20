// app/components/BlocDocutheque.jsx
"use client";
import Link from "next/link";

export default function BlocDocutheque() {
  return (
    <section className="w-full bg-gray-50 py-20 flex justify-center items-center">
      <div className="relative bg-white shadow-lg rounded-3xl w-11/12 max-w-6xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12">
        
        {/* Ligne verte décorative */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-green-600 -translate-y-1/2 z-0"></div>

        {/* Logo Docuthèque */}
        <div className="relative z-10 flex flex-col items-start md:items-center md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/logodocutheque.png"
            alt="Logo Docuthèque"
            className="h-28 w-auto mb-4 md:ml-10 object-contain bg-white px-4"
          />
          <p className="text-gray-600 text-lg md:text-xl ml-4 md:ml-10 font-medium">
            Découvrez une sélection de films documentaires professionels, étudiants et amateurs.
          </p>
        </div>

        {/* Image cliquable */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <Link href="/docutheque">
            <div className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer transition">
              <img
                src="/images/docutheque.png"
                alt="Accéder à la Docuthèque"
                className="w-150 h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg font-semibold">
                  Découvrir la Docuthèque →
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
