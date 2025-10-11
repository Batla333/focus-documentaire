import Link from "next/link";

export default function Simon() {
  return (

     
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">

       {/* Header avec nom du site et bouton accueil */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
    <img
      src="/images/logo.png"
      alt="FOCUS documentaire"
      className="w-50 h-auto rounded-none shadow-none object-contain"
    />
    <Link
      href="/"
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Accueil
    </Link>
  </header>

      {/* En-tête */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Claire Simon</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Née à Londres, Claire Simon apprend le cinéma par le montage. Plus tard, elle découvre le cinéma direct grace aux Ateliers Varan. Ses films enchaîne les sélections en festivals, Berlinale, Cannes, Visions du Réel et font d&apos;elle une figure majeure du cinéma documentaire en France.

        </p>
      </section>

      {/* Image du réalisateur */}
      <section className="max-w-3xl mx-auto mb-16">
        <img
          src="/images/clairesimon.jpg"
          alt="Claire Simon"
          className="w-100 mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Claire Simon.
        </p>
      </section>

      {/* Filmographie */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Filmographie sélective</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple de film */}

          


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/recreations.jpg"
                alt="Récréations"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Récréations</h3>
            <p className="text-sm text-gray-500">1993</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/lebois.jpg"
                alt="Le bois dont les rêves sont faits"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Le bois dont les rêves sont faits</h3>
            <p className="text-sm text-gray-500">2015</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/leconcours.jpg"
                alt="Le Concours"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Le Concours</h3>
            <p className="text-sm text-gray-500">2016</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/notrecorps.jpg"
                alt="Notre corps"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Notre corps</h3>
            <p className="text-sm text-gray-500">2023</p>
          </div>


          

        </div>
      </section>
    </main>
  );
}