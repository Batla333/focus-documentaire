import Link from "next/link";

export default function Saab() {
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
        <h1 className="text-5xl font-bold mb-4">Jocelyne Saab</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Jocelyne Saab est née et a grandi à Beyrouth. Elle entame une carrière de journaliste, notamment en couvrant les guerres du Moyen-Orient pour France Télévisions. La chaîne refuse certains sujets proposés par Jocelyne Saab, notamment sur les femmes palestiniennes. Elle décide donc de quitter la chaîne, et rompt avec le monde du journalisme afin de s&apos;affranchir des formatages télévisuels restrictifs et de la censure politique imposée. Elle se tourne dès lors vers un cinéma documentaire libre, militant et engagé.

        </p>
      </section>

      {/* Image du réalisateur */}
      <section className="max-w-3xl mx-auto mb-16">
        <img
          src="/images/saab.jpg"
          alt="Jocelyne Saab"
          className="w-100 mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Jocelyne Saab. (Photo : Jeff Delonge, 2008. )
        </p>
      </section>

      {/* Filmographie */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Filmographie sélective</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple de film */}

          


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/lesfemmespalestiniennes.jpg"
                alt="Les femmes palestiniennes"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Les femmes palestiniennes</h3>
            <p className="text-sm text-gray-500">1974</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/jamaisplus.jpg"
                alt="Beyrouth, jamais plus"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Beyrouth, jamais plus</h3>
            <p className="text-sm text-gray-500">1976</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/beyrouthmaville.jpg"
                alt="Beyrouth, ma ville"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Beyrouth, ma ville</h3>
            <p className="text-sm text-gray-500">1983</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/ladamedesaigon.jpg"
                alt="La Dame de Saïgon"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">La Dame de Saïgon</h3>
            <p className="text-sm text-gray-500">1996</p>
          </div>


          

        </div>
      </section>
    </main>
  );
}