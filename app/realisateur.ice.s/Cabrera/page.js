import Link from "next/link";

export default function Cabrera() {
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
        <h1 className="text-5xl font-bold mb-5">Dominique Cabrera</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Née en Algérie, Dominique Cabrera s&apos;installe en France en 1962. Après des études en lettres modernes, elle entre à l&apos;Idhec en 1977. Elle travaille comme monteuse dans les stations régionales de France 3 tout en suivant des cours de théâtre.

En 1981, elle réalise son premier court métrage J&apos;ai droit à la parole où l&apos;on voit comment les locataires d&apos;une cité de transit en banlieue parisienne s'organisent. Depuis, les nombreux documentaires qu&apos;elle a réalisés l&apos;ont fait connaître, comme Chronique d&apos;une banlieue ordinaire, Une poste à La Courneuve ou encore Rester là-bas, dans lequel elle aborde les liens entre la France et l&apos;Algérie, à travers le retour de ceux qui sont restés là-bas.
        </p>
      </section>

      {/* Image du réalisateur */}
      <section className="max-w-3xl mx-auto mb-16">
        <img
          src="/images/Cabrera.jpg"
          alt="Dominique Cabrera"
          className="w-100 mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Dominique Cabrera
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