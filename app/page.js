import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Header */}
      
      <header className="bg-white shadow-md w-full">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-6">
          <img
      src="/images/logo.png"
      alt="FOCUS documentaire"
      className="w-50 h-auto rounded-none shadow-none object-contain"
    />
          <nav className="space-x-6">
            
            <a href="/docutheque" className="text-gray-900 hover:underline">Docuthèque</a>
            <a href="#" className="text-gray-900 hover:underline">Articles</a>
            <a href="#" className="text-gray-900 hover:underline">Entretiens</a>
          </nav>
        </div>
      </header>

      {/* Hero / Introduction */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <p className="text-lg text-gray-600 max-w-xl">
          Un espace dédié au cinéma documentaire : actualités, articles, entretiens, films...
        </p>
      </section>



      {/* Sections exemples */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-green-700 font-bold mb-3">À la une</h2>
          <p className="text-gray-400"> Derniers articles et critiques.</p>
        </div>
         <Link href="/docutheque">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
      <h2 className="text-2xl text-green-700 font-bold mb-3"> La Docuthèque</h2>
      <p className="text-gray-400">
        Découvrez une sélection de films documentaires expérimentaux, étudiants, amateurs...
      </p>
    </div>
         </Link>
      </section>


 {/* Section Réalisateurs / images cliquables */}
      <section className="w-full">
        <h2 className="flex text-4xl font-bold mb-7 justify-center text-gray-800 text-center">
         Galerie de réalisateur·ice·s documentaires
        </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        </div>
       
          <Link href="/realisateur.ice.s/Depardon" className="inline-block px-6 ">
            <div className="cursor-pointer hover:scale-120 transition transform">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/RAYMOND_DEPARDON_AUTOPORTRAIT.jpg"
                alt="Raymond Depardon"
                className="rounded-xl shadow-lg w-50 h-50 object-cover"
              />
              <h3 className=" mt-2 font-semibold px-4 text-lg text-gray-800">
                Raymond Depardon
              </h3>
             </div>
          </Link>

          <Link href="/realisateur.ice.s/Saab" className="inline-block px-6 ">
            <div className="cursor-pointer hover:scale-120 transition transform">
              <img
                src="/images/saab.jpg"
                alt="Jocelyne Saab"
                className="rounded-xl shadow-lg w-50 h-50 object-cover"
              />
              <h3 className=" mt-2 font-semibold px-10 text-lg text-gray-800">
                Jocelyne Saab
              </h3>
             </div>
          </Link>

          <Link href="/realisateur.ice.s/Cavalier" className="inline-block px-6 ">
            <div className="cursor-pointer hover:scale-120 transition transform">
              <img
                src="/images/CAVALIER.jpg"
                alt="Alain Cavalier"
                className="rounded-xl shadow-lg w-50 h-50 object-cover"
              />
              <h3 className=" mt-2 font-semibold px-10 text-lg text-gray-800">
                Alain Cavalier
              </h3>
            </div>
           </Link>

           <Link href="/realisateur.ice.s/Simon" className="inline-block px-6 ">
            <div className="cursor-pointer hover:scale-120 transition transform">
              <img
                src="/images/clairesimon.jpg"
                alt="Claire Simon"
                className="rounded-xl shadow-lg w-50 h-50 object-cover"
              />
              <h3 className=" mt-2 font-semibold px-10 text-lg text-gray-800">
                Claire Simon
              </h3>
             </div>
          </Link>

         </section>

      {/* Footer */}
      <footer className="bg-white mt-auto shadow-inner py-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500">
          © 2025 FOCUS Documentaire. Tous droits réservés.
        </div>
      </footer>

    </div>
  );
}