import Link from "next/link";

export default function Wiseman() {
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
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Frederick Wiseman</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
         Cinéaste américain né en 1930 à Boston, Frederick Wiseman est diplômé en droit en 1954 à la Yale Law School. Wiseman affirme dès son premier film documentaire, Titicut Follies en 1967, ses principes de base : l'absence d'interviews, de commentaire off et de musiques additionnelles.
        </p>
      </section>

      {/* Image du réalisateur */}
      <section className="max-w-3xl mx-auto mb-16">
        <img
          src="/images/wiseman.jpg"
          alt="Frederick Wiseman"
          className="w-100 mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Fredereick Wiseman. (Photo : Antoine Yar, 2021. )
        </p>
      </section>

      {/* Filmographie */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Filmographie sélective</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple de film */}

          


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/titicutfollies.jpg"
                alt="Titicut Follies"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Titicut Follies</h3>
            <p className="text-sm text-gray-500">1967</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/meat.jpg"
                alt="Meat"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Meat</h3>
            <p className="text-sm text-gray-500">1976</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/Aspen.jpg"
                alt="Aspen"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Aspen</h3>
            <p className="text-sm text-gray-500">1991</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/cityhall.jpg"
                alt="City Hall"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">City Hall</h3>
            <p className="text-sm text-gray-500">2020</p>
          </div>


          

        </div>
      </section>
    </main>
  );
}