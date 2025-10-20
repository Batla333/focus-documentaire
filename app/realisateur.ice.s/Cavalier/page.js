import Link from "next/link";

export default function Cavalier() {
  return (

     
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">

       {/* Header avec nom du site et bouton accueil */}
   <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
    <Link
      href="/"
    >
       <img
      src="/images/logoblanc.png"
      alt="FOCUS documentaire"
      className="w-50 h-auto rounded-none shadow-none object-contain"
    />
    </Link>
  </header>

    



    

      {/* En-tête */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold mb-5">Alain Cavalier</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Après des fictions à succès, Alain Cavalier choisit le medium documentaire comme outil d&apos;experimentation. Réalisateur d&apos;une sensibilité rare, il développe dans son oeuvre un cinéma du commentaire-direct, dicté par celui qui se nomme &quot;Le Filmeur&quot;.
        </p>
      </section>

      {/* Image du réalisateur */}
      <section className="max-w-3xl mx-auto mb-16">
        <img
          src="/images/CAVALIER.jpg"
          alt="Alain Cavalier"
          className="w-100 mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Alain Cavalier. (Photo : Erling Mandelmann, 1986.)
        </p>
      </section>

      {/* Filmographie */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Filmographie sélective</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple de film */}

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/portraits.png"
                alt="24 Portraits"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">24 portraits</h3>
            <p className="text-sm text-gray-500">1987-1991</p>
          </div>

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/lefilmeur.jpg"
                alt="Le Filmeur"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Le Filmeur</h3>
            <p className="text-sm text-gray-500">2005</p>
          </div>


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/irene.jpg"
                alt="Irène"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Irène</h3>
            <p className="text-sm text-gray-500">2009</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/amitie.jpg"
                alt="L'Amitié"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">L&apos;Amitié</h3>
            <p className="text-sm text-gray-500">2022</p>
          </div>

        </div>
      </section>
    </main>
  );
}