"use client";
import Link from "next/link";

const realisateurs = [
  {
    nom: "Raymond Depardon",
    slug: "depardon",
    image: "/images/realisateurs/depardon.jpg",
  },
  {
    nom: "Alain Cavalier",
    slug: "cavalier",
    image: "/images/realisateurs/cavalier.jpg",
  },
  {
    nom: "William Klein",
    slug: "klein",
    image: "/images/realisateurs/klein.jpg",
  },
  // ajoute d'autres réalisateurs ici
];

export default function GalerieRealisateurs() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Galerie de réalisateur.ice.s documentaires.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {realisateurs.map((r, index) => (
            <Link
              key={index}
              href={`/realisateur.ice.s/${r.slug}`}
              className="group block text-center"
            >
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                <img
                  src={r.image}
                  alt={r.nom}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-3 text-gray-800 group-hover:text-green-700">
                {r.nom}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
