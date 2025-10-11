import Link from "next/link";
import HeaderSearch from "./components/HeaderSearch";

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
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          FOCUS Documentaire
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Un espace dédié au cinéma documentaire : actualités, articles, entretiens, films...
        </p>
      </section>

      {/* Sections exemples */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-green-700 font-bold mb-3">À la une</h2>
          <p className="text-gray-400">Derniers articles et critiques.</p>
        </div>
        <Link href="/docutheque">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl text-green-700 font-bold mb-3">La Docuthèque</h2>
            <p className="text-gray-400">Découvrez une sélection de films documentaires expérimentaux, étudiants, amateurs...</p>
          </div>
        </Link>
      </section>

      {/* Galerie Réalisateurs */}
      <section className="w-full max-w-5xl mx-auto py-10">
        <h2 className="text-4xl font-bold mb-7 text-gray-800 text-center">
          Galerie de réalisateur·ice·s documentaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 justify-items-center">

          <Link href="/realisateur.ice.s/Depardon" className="inline-block cursor-pointer hover:scale-110 transition transform">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/RAYMOND_DEPARDON_AUTOPORTRAIT.jpg"
              alt="Raymond Depardon"
              className="rounded-xl shadow-lg w-50 h-50 object-cover"
            />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 text-center">Raymond Depardon</h3>
          </Link>

          <Link href="/realisateur.ice.s/Saab" className="inline-block cursor-pointer hover:scale-110 transition transform">
            <img
              src="/images/saab.jpg"
              alt="Jocelyne Saab"
              className="rounded-xl shadow-lg w-50 h-50 object-cover"
            />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 text-center">Jocelyne Saab</h3>
          </Link>

          <Link href="/realisateur.ice.s/Cavalier" className="inline-block cursor-pointer hover:scale-110 transition transform">
            <img
              src="/images/CAVALIER.jpg"
              alt="Alain Cavalier"
              className="rounded-xl shadow-lg w-50 h-50 object-cover"
            />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 text-center">Alain Cavalier</h3>
          </Link>

          <Link href="/realisateur.ice.s/Simon" className="inline-block cursor-pointer hover:scale-110 transition transform">
            <img
              src="/images/clairesimon.jpg"
              alt="Claire Simon"
              className="rounded-xl shadow-lg w-50 h-50 object-cover"
            />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 text-center">Claire Simon</h3>
          </Link>

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